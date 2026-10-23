// Module ID: 6457
// Function ID: 6458
// Name: IsGenericDescriptor
// Dependencies: [6439, 1308, 6452, 6443]

// Module 6457 (IsGenericDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 6439 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6443 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 6452 */;


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
