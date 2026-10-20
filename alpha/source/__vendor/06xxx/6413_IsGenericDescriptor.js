// Module ID: 6413
// Function ID: 6414
// Name: IsGenericDescriptor
// Dependencies: [6395, 1308, 6408, 6399]

// Module 6413 (IsGenericDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 6395 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6399 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 6408 */;


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
