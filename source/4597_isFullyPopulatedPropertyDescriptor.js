// Module ID: 4597
// Function ID: 4598
// Name: isFullyPopulatedPropertyDescriptor
// Dependencies: [4580]

// Module 4597 (isFullyPopulatedPropertyDescriptor)

export default function isFullyPopulatedPropertyDescriptor(IsAccessorDescriptor) {
  let tmp = require(4580) /* isPropertyDescriptor */(arg1);
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
