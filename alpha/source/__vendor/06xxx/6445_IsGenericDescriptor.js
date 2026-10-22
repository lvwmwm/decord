// Module ID: 6445
// Function ID: 6446
// Name: IsGenericDescriptor
// Dependencies: [6427, 1308, 6440, 6431]

// Module 6445 (IsGenericDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 6427 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6431 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 6440 */;


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
