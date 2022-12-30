function verifyProof(proof, node, root, concat) {
  let derivedRoot = node;
  proof.forEach((leaf) => {
    if (leaf.left) {
      derivedRoot = concat(leaf.data, derivedRoot);
    } else {
      derivedRoot = concat(derivedRoot, leaf.data);
    }
  });
  if (derivedRoot !== root) {
    return false;
  }
  return true;
}

module.exports = verifyProof;
