// Module ID: 4877
// Function ID: 4878
// Name: isFullyPopulatedPropertyDescriptor
// Dependencies: [4860]

// Module 4877 (isFullyPopulatedPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 4860 */;


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
