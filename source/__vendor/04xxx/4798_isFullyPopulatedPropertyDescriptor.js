// Module ID: 4798
// Function ID: 4799
// Name: isFullyPopulatedPropertyDescriptor
// Dependencies: [4781]

// Module 4798 (isFullyPopulatedPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 4781 */;


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
