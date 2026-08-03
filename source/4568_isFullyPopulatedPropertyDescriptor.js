// Module ID: 4568
// Function ID: 4569
// Name: isFullyPopulatedPropertyDescriptor
// Dependencies: [4551]

// Module 4568 (isFullyPopulatedPropertyDescriptor)

export default function isFullyPopulatedPropertyDescriptor(IsAccessorDescriptor) {
  let tmp = require(4551) /* isPropertyDescriptor */(arg1);
  if (tmp) {
    tmp = "[[Enumerable]]" in arg1;
  }
  if (tmp) {
    tmp = "[[Configurable]]" in arg1;
  }
  if (tmp) {
    tmp = IsAccessorDescriptor.IsAccessorDescriptor(arg1) || IsAccessorDescriptor.IsDataDescriptor(arg1);
    const tmp3 = IsAccessorDescriptor.IsAccessorDescriptor(arg1) || IsAccessorDescriptor.IsDataDescriptor(arg1);
  }
  return tmp;
};
