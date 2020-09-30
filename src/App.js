import React, { Component } from 'react';

class App extends Component {
  state = {
    data: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5,],
    response: null,
    input: null,
  };

  linearSearch(value) {
    const { data } = this.state;
    let searches = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] == value) {
        return `Value found at index ${i}, searched ${i + 1} time(s)`;
      }
      searches++;
    }
    return `Value not found, searched ${searches} time(s)`;
  }

  binarySearch(value, start, end, searches = 0) {
    const { data } = this.state;
    data.sort((a, b) => a - b);
    console.log(data);
    searches = searches + 1;
    start = start === undefined ? 0 : start;
    end = end === undefined ? data.length - 1 : end;

    if (start > end) {
      console.log('start > end');
      return `Value not found, searched ${searches} time(s)`;
    }

    const index = Math.floor((start + end) / 2);
    const item = data[index];
    console.log(item);
    console.log(start, end);
    if (item == value) {
      return `Value found at index ${index}, searched ${searches} time(s)`;
    }
    else if (item < value) {
      return this.binarySearch(value, index + 1, end, searches);
    }
    else if (item > value) {
      return this.binarySearch(value, start, index - 1, searches);
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      input: e.target.search.value
    });
    const response = this.binarySearch(e.target.search.value);
    this.setState({
      response
    });
  };

  render() {
    return (
      <main className='App' >
        <h1>Searching</h1>
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <label htmlFor="search">Linear Search Data For: </label>
          <input type="number" id="search" name="search" />
          <button type="submit">Search</button>
        </form>
        {(this.state.response || this.state.response === 0) &&
          <section>
            <h3>Index: {this.state.response}</h3>
          </section>}
      </main>
    );
  }
}

export default App;