// Module ID: 4656
// Function ID: 4657
// Name: isFullyPopulatedPropertyDescriptor
// Dependencies: [4639]

// Module 4656 (isFullyPopulatedPropertyDescriptor)

export default function isFullyPopulatedPropertyDescriptor(IsAccessorDescriptor) {
  let tmp = require(4639) /* isPropertyDescriptor */(arg1);
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
