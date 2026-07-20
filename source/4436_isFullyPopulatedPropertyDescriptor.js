// Module ID: 4436
// Function ID: 38848
// Name: isFullyPopulatedPropertyDescriptor
// Dependencies: []

// Module 4436 (isFullyPopulatedPropertyDescriptor)

export default function isFullyPopulatedPropertyDescriptor(IsAccessorDescriptor) {
  let tmp = require(dependencyMap[0])(arg1);
  if (tmp) {
    tmp = "[[Enumerable]]" in arg1;
  }
  if (tmp) {
    tmp = "[[Configurable]]" in arg1;
  }
  if (tmp) {
    tmp = IsAccessorDescriptor.IsAccessorDescriptor(arg1) || IsAccessorDescriptor.IsDataDescriptor(arg1);
    const tmp2 = IsAccessorDescriptor.IsAccessorDescriptor(arg1) || IsAccessorDescriptor.IsDataDescriptor(arg1);
  }
  return tmp;
};
