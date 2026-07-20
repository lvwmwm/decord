// Module ID: 1381
// Function ID: 16525
// Name: hasPropertyDescriptors
// Dependencies: []

// Module 1381 (hasPropertyDescriptors)
function hasPropertyDescriptors() {
  return require(dependencyMap[0]);
}
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
  if (require(dependencyMap[0])) {
    const obj = { value: 1 };
    return 1 !== require(dependencyMap[0])([], "length", obj).length;
  } else {
    return null;
  }
};

export default hasPropertyDescriptors;
