const MerkleTree = require("./index");

const concat = (a, b) => `Hash(${a} + ${b})`;

const tree = new MerkleTree(
  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
  // ["A", "B", "C", "D", "E"],
  concat
);

const tree2 = new MerkleTree(["A", "B", "C", "D", "E"], concat);

console.log(tree.getProof(0));
// console.log(tree2.getProof(2));
