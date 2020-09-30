const BinarySearchTree = require('./BinarySearchTree');

// 14 15 19 25 27 35 79 89 90 91
const tree1 = new BinarySearchTree();
tree1.insert(35, 35);
tree1.insert(25, 25);
tree1.insert(15, 15);
tree1.insert(14, 14);
tree1.insert(19, 19);
tree1.insert(27, 27);
tree1.insert(89, 89);
tree1.insert(79, 79);
tree1.insert(91, 91);
tree1.insert(90, 90);
console.log('in-order traversal: ', tree1.inOrder());
console.log('pre-order traversal: ', tree1.preOrder());
console.log('post-order traversal: ', tree1.postOrder());

// 5 7 6 9 11 10 8
const tree2 = new BinarySearchTree();
tree2.insert(8, 8);
tree2.insert(6, 6);
tree2.insert(5, 5);
tree2.insert(7, 7);
tree2.insert(10, 10);
tree2.insert(9, 9);
tree2.insert(11, 11);
console.log('in-order trav: ', tree2.inOrder());
console.log('pre-order trav: ', tree2.preOrder());
console.log('post-order trav: ', tree2.postOrder());

