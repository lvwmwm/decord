// Module ID: 5975
// Function ID: 5976
// Name: isFullyPopulatedPropertyDescriptor
// Dependencies: [5958]

// Module 5975 (isFullyPopulatedPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 5958 */;


export default function isFullyPopulatedPropertyDescriptor(IsAccessorDescriptor, arg1) {
  let tmp = isPropertyDescriptor(arg1) && "[[Enumerable]]" in arg1 && "[[Configurable]]" in arg1;
  if (tmp) {
    tmp = IsAccessorDescriptor.IsAccessorDescriptor(arg1) || IsAccessorDescriptor.IsDataDescriptor(arg1);
    IsAccessorDescriptor.IsAccessorDescriptor(arg1) || IsAccessorDescriptor.IsDataDescriptor(arg1);
  }
  return tmp;
};
