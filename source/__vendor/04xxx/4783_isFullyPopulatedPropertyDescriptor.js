// Module ID: 4783
// Function ID: 4784
// Name: isFullyPopulatedPropertyDescriptor
// Dependencies: [4766]

// Module 4783 (isFullyPopulatedPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 4766 */;


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
