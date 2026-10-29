// Module ID: 6518
// Function ID: 6519
// Name: IsGenericDescriptor
// Dependencies: [6500, 1305, 6513, 6504]

// Module 6518 (IsGenericDescriptor)
import _mod1305 from "module_1305" /* 1305 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 6500 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6504 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 6513 */;


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
