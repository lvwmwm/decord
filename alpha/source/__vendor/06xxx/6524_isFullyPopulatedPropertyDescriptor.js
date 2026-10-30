// Module ID: 6524
// Function ID: 6525
// Name: isFullyPopulatedPropertyDescriptor
// Dependencies: [6507]

// Module 6524 (isFullyPopulatedPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 6507 */;


export default function isFullyPopulatedPropertyDescriptor(IsAccessorDescriptor, arg1) {
  let tmp = isPropertyDescriptor(arg1) && "[[Enumerable]]" in arg1 && "[[Configurable]]" in arg1;
  if (tmp) {
    tmp = IsAccessorDescriptor.IsAccessorDescriptor(arg1) || IsAccessorDescriptor.IsDataDescriptor(arg1);
    IsAccessorDescriptor.IsAccessorDescriptor(arg1) || IsAccessorDescriptor.IsDataDescriptor(arg1);
  }
  return tmp;
};
