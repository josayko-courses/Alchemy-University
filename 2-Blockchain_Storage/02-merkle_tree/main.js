const MerkleTree = require("./index");

const concat = (a, b) => `Hash(${a} + ${b})`;
const tree = new MerkleTree(["A", "B", "C", "D", "E", "F", "G"], concat);

console.log(tree.getRoot());
