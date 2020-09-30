function findMaxProfit(arr) {
  let maxProfit = arr[1] - arr[0];
  while (arr.length) {
    let buy = arr[0];
    for (let i = 1; i < arr.length; ++i) {
      let profit = arr[i] - buy;
      if (maxProfit < profit) {
        maxProfit = profit;
      }
    }
    arr.shift();
  }
  return maxProfit;
}

console.log('expect 26: ', findMaxProfit([128, 97, 121, 123, 98, 97, 105]));
console.log('expect 38: ', findMaxProfit([128, 97, 121, 123, 98, 97, 135]));
console.log('expect 24: ', findMaxProfit([128, 97, 121, 100, 98, 97, 99]));

function findMaxProfitEfficiently(arr) {
  let buy = arr[0];
  let maxProfit = 0;
  for (let i = 1; i < arr.length; ++i) {
    let sell = arr[i];
    if (sell - buy < 0) {
      buy = sell;
    } else if (sell - buy > maxProfit) {
      maxProfit = sell - buy;
    }
  }
  return maxProfit;
}

console.log('expect 26: ', findMaxProfitEfficiently([128, 97, 121, 123, 98, 97, 105]));