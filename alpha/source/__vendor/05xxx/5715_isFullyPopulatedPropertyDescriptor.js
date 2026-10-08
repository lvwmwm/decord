// Module ID: 5715
// Function ID: 5716
// Name: isFullyPopulatedPropertyDescriptor
// Dependencies: [5698]

// Module 5715 (isFullyPopulatedPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 5698 */;


export default function isFullyPopulatedPropertyDescriptor(IsAccessorDescriptor, arg1) {
  let tmp = isPropertyDescriptor(arg1) && "[[Enumerable]]" in arg1 && "[[Configurable]]" in arg1;
  if (tmp) {
    tmp = IsAccessorDescriptor.IsAccessorDescriptor(arg1) || IsAccessorDescriptor.IsDataDescriptor(arg1);
    IsAccessorDescriptor.IsAccessorDescriptor(arg1) || IsAccessorDescriptor.IsDataDescriptor(arg1);
  }
  return tmp;
};
