function searchDeweyDecimalSystem(book, library) {
  const searchDeweySections = book.dewey.split('.');
  const possibles = [];
  for (let i = 0; i < library.length; ++i) {
    let firstDewey = library[i].dewey.split('.')[0];
    let secondDewey = library[i].dewey.split('.')[1];
    if (firstDewey === searchDeweySections[0] && secondDewey === searchDeweySections[1]) {
      possibles.push(library[i]);
    }
  }
  const bookSearchedFor = possibles.find(libBook => libBook.title === book.title);
  if (bookSearchedFor) {
    return bookSearchedFor;
  }
  return `Sorry, but we could not find that book in our system.`;
}

const library = [
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  { author: 'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];

const book1 = { dewey: '005.133', title: 'The REXX Language' };
const book2 = { dewey: '220.113', title: 'Religions of Cheese' };
const book3 = { dewey: '220.52081', title: 'King James Bible' };
const book4 = { dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' };

console.log('expect book by Cowlishaw: ', searchDeweyDecimalSystem(book1, library));
console.log('expect no book found: ', searchDeweyDecimalSystem(book2, library));
console.log('expect no book found: ', searchDeweyDecimalSystem(book3, library));
console.log('expect book by Chuck Norris: ', searchDeweyDecimalSystem(book4, library));