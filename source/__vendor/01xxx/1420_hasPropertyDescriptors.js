// Module ID: 1420
// Function ID: 1421
// Name: hasPropertyDescriptors
// Dependencies: [564]

// Module 1420 (hasPropertyDescriptors)
function hasPropertyDescriptors(arg0) {
  return require(564) /* flag */;
}
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
  if (require(564) /* flag */) {
    try {
      return 1 !== require(564) /* flag */([], "length", { value: 1 }).length;
    } catch (err) {
      return true;
    }
  } else {
    return null;
  }
};

export default hasPropertyDescriptors;
