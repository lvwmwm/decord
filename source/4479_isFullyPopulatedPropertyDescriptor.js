// Module ID: 4479
// Function ID: 39071
// Name: isFullyPopulatedPropertyDescriptor
// Dependencies: [4462]

// Module 4479 (isFullyPopulatedPropertyDescriptor)

export default function isFullyPopulatedPropertyDescriptor(IsAccessorDescriptor) {
  let tmp = require(4462) /* isPropertyDescriptor */(arg1);
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
