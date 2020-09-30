const BinarySearchTree = require('./BinarySearchTree');

// 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22
const BST = new BinarySearchTree();
BST.insert(25, 25);
BST.insert(15, 15);
BST.insert(50, 50);
BST.insert(10, 10);
BST.insert(24, 24);
BST.insert(35, 35);
BST.insert(70, 70);
BST.insert(4, 4);
BST.insert(12, 12);
BST.insert(18, 18);
BST.insert(31, 31);
BST.insert(44, 44);
BST.insert(66, 66);
BST.insert(90, 90);
BST.insert(22, 22);

console.log('pre-order traversal: ', BST.preOrder());
console.log('in-order traversal: ', BST.inOrder());
console.log('post-order traversal: ', BST.postOrder());