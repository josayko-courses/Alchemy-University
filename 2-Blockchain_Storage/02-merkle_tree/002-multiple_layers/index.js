class MerkleTree {
  constructor(leaves, concat) {
    this.leaves = leaves;
    this.concat = concat;
  }

  getRoot() {
    let leaves = this.leaves;

    if (leaves.length === 1) {
      return leaves[0];
    }

    let merkleRoot = [];

    while (leaves.length > 1) {
      merkleRoot.push(this.concat(leaves.shift(), leaves.shift()));
      if (leaves.length === 1) {
        merkleRoot.push(leaves.shift());
      }
      if (!leaves.length && merkleRoot.length !== 1) {
        leaves = merkleRoot;
        merkleRoot = [];
      }
    }
    return merkleRoot;
  }
}

module.exports = MerkleTree;
