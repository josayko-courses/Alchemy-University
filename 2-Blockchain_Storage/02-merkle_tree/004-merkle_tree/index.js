class MerkleTree {
  constructor(leaves, concat) {
    this.leaves = leaves;
    this.concat = concat;
  }

  getProof(index, layer = this.leaves, proof = []) {
    if (layer.length === 1) {
      return proof;
    }
    const newLayer = [];
    for (let i = 0; i < layer.length; i += 2) {
      let left = layer[i];
      let right = layer[i + 1];

      if (!right) {
        newLayer.push(left); // odd number of leaves
      } else {
        newLayer.push(this.concat(left, right));
        if (i === index || i === index - 1) {
          let isLeft = !(index % 2);
          proof.push({
            data: isLeft ? right : left,
            left: !isLeft,
          });
        }
      }
    }
    return this.getProof(Math.floor(index / 2), newLayer, proof);
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
