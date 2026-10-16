// Module ID: 5939
// Function ID: 5940
// Name: IsGenericDescriptor
// Dependencies: [5921, 1308, 5934, 5925]

// Module 5939 (IsGenericDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5921 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5925 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 5934 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor(arg0)) {
    const tmp5 = IsAccessorDescriptor(arg0);
    const tmp6 = !tmp5 && !IsDataDescriptor(arg0);
    return tmp6;
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp3;
  }
};
