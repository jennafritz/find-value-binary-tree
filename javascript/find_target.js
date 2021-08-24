class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function findTarget(root, target) {
  // type your code here
  if(root === null){
    return null
  }

  if(root.value === target){
    return root
  }

  if(target > root.value){
    return findTarget(root.right, target)
  }

  if(target < root.value){
    return findTarget(root.left, target)
  }
}

if (require.main === module) {
  // add your own tests in here
  const root = new Node(1, new Node(-1), new Node(2));
  console.log("Expecting: Node with value 2");
  console.log(findTarget(root, 2));

  console.log("");

  console.log("Expecting: null");
  console.log(findTarget(root, 5));

  console.log("")

  let newRoot = new Node(6, new Node(5, new Node(3), null), new Node(10, new Node(9), new Node(20)))
  console.log("Expecting: Node with value 20")
  console.log(findTarget(newRoot, 20))

  console.log("Expecting: Node with value 5")
  console.log(findTarget(newRoot, 5))
}

module.exports = { findTarget, Node };

// Please add your pseudocode to this file
// And a written explanation of your solution
