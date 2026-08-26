// Module ID: 4782
// Function ID: 4783
// Name: isFullyPopulatedPropertyDescriptor
// Dependencies: [4765]

// Module 4782 (isFullyPopulatedPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 4765 */;


export default function isFullyPopulatedPropertyDescriptor(IsAccessorDescriptor) {
  let tmp = isPropertyDescriptor(arg1);
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
