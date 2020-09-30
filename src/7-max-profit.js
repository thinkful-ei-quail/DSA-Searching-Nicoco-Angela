const BinarySearchTree = require('./BinarySearchTree');

const stocks = new BinarySearchTree();
stocks.insert(128, 'Day 1: 128');
stocks.insert(97, 'Day 2: 97');
stocks.insert(121, 'Day 3: 121');
stocks.insert(123, 'Day 4: 123');
stocks.insert(98, 'Day 5: 98');
stocks.insert(97, 'Day 6: 97');
stocks.insert(105, 'Day 7: 105');

// function sortPreOrder(inOrderArr, start = 0, end = inOrderArr.length, preOrderArr = []) {
//   if (inOrderArr.length === 0) {
//     return null;
//   }
//   let middleIndex = Math.floor((start + end) / 2);
//   preOrderArr.push(inOrderArr[middleIndex]);
//   let lesserArr = inOrderArr.slice(0, middleIndex);
//   let greaterArr = inOrderArr.slice(middleIndex + 1, end);
//   console.log('lesser', lesserArr);
//   console.log('greater', greaterArr);
// }
// console.log(sortPreOrder([128, 97, 121, 123, 98, 97, 105]));
// function createBinarySearchTree(arr) {
//   const tree = new BinarySearchTree();
//   for (let i = 0; i < arr.length; ++i) {
//     tree.insert(arr[i], `Day ${i + 1}: ${arr[i]}`);
//   }
//   return tree;
// }

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