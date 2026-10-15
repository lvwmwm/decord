// Module ID: 5935
// Function ID: 5936
// Name: isFullyPopulatedPropertyDescriptor
// Dependencies: [5918]

// Module 5935 (isFullyPopulatedPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 5918 */;


export default function isFullyPopulatedPropertyDescriptor(IsAccessorDescriptor, arg1) {
  let tmp = isPropertyDescriptor(arg1) && "[[Enumerable]]" in arg1 && "[[Configurable]]" in arg1;
  if (tmp) {
    tmp = IsAccessorDescriptor.IsAccessorDescriptor(arg1) || IsAccessorDescriptor.IsDataDescriptor(arg1);
    IsAccessorDescriptor.IsAccessorDescriptor(arg1) || IsAccessorDescriptor.IsDataDescriptor(arg1);
  }
  return tmp;
};
