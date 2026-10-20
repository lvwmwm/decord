// Module ID: 6416
// Function ID: 6417
// Name: IsGenericDescriptor
// Dependencies: [6398, 1308, 6411, 6402]

// Module 6416 (IsGenericDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 6398 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6402 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 6411 */;


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
