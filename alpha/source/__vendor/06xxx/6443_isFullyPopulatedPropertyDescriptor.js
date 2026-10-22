// Module ID: 6443
// Function ID: 6444
// Name: isFullyPopulatedPropertyDescriptor
// Dependencies: [6426]

// Module 6443 (isFullyPopulatedPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 6426 */;


export default function isFullyPopulatedPropertyDescriptor(IsAccessorDescriptor, arg1) {
  let tmp = isPropertyDescriptor(arg1) && "[[Enumerable]]" in arg1 && "[[Configurable]]" in arg1;
  if (tmp) {
    tmp = IsAccessorDescriptor.IsAccessorDescriptor(arg1) || IsAccessorDescriptor.IsDataDescriptor(arg1);
    IsAccessorDescriptor.IsAccessorDescriptor(arg1) || IsAccessorDescriptor.IsDataDescriptor(arg1);
  }
  return tmp;
};
