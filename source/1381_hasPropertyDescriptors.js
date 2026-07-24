// Module ID: 1381
// Function ID: 16532
// Name: hasPropertyDescriptors
// Dependencies: [541]

// Module 1381 (hasPropertyDescriptors)
function hasPropertyDescriptors(arg0) {
  return require(541);
}
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
  if (require(541)) {
    const obj = { value: 1 };
    return 1 !== require(541)([], "length", obj).length;
  } else {
    return null;
  }
};

export default hasPropertyDescriptors;
