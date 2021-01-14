class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
  addNode(node) {
    if (node.value < this.value) {
      if (this.left === null) {
        this.left = node;
      } else {
        this.left.addNode(node);
      }
    } else if (node.value > this.value) {
      if (this.right === null) {
        this.right = node;
      } else {
        this.right.addNode(node);
      }
    }
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  addValue(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
    } else {
      this.root.addNode(node);
    }
  }
}

const tree = new Tree();
tree.addValue(10); // root this.value = 10
tree.addValue(9); // going to left this.value = 9
tree.addValue(8); // going to left this.value = 8
tree.addValue(11); // going to right cause node.value(11) > this.value(8)

console.log(tree);
