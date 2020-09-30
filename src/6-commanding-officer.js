const BinarySearchTree = require('./BinarySearchTree');

const USSEnterprise = new BinarySearchTree();
USSEnterprise.insert(8, 'Captain Picard');
USSEnterprise.insert(6, 'Commander Riker');
USSEnterprise.insert(5, 'Lt. Cmdr. Worf');
USSEnterprise.insert(4, 'Lieutenant Security-officer');
USSEnterprise.insert(7, 'Lt. Cmdr. LaForge');
USSEnterprise.insert(10, 'Commander Data');
USSEnterprise.insert(12, 'Lt. Cmdr. Crusher');
USSEnterprise.insert(11, 'Lieutenant Selar');

function findNextCommandingOfficer(shipTree) {
  const queue = [];
  const rankings = [];
  const node = shipTree;
  queue.push(node);
  while (queue.length) {
    const node = queue.shift(); //remove from the queue
    rankings.push(node.value); // add that value from the queue to an array

    if (node.left) {
      queue.push(node.left); //add left child to the queue
    }

    if (node.right) {
      queue.push(node.right); // add right child to the queue
    }
  }
  return rankings;
}

console.log(findNextCommandingOfficer(USSEnterprise));