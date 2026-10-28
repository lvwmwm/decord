// Module ID: 6494
// Function ID: 6495
// Name: IsGenericDescriptor
// Dependencies: [6476, 1305, 6489, 6480]

// Module 6494 (IsGenericDescriptor)
import _mod1305 from "module_1305" /* 1305 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 6476 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6480 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 6489 */;


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
    const tmp3 = new _mod1305("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp3;
  }
};
