// Module ID: 6491
// Function ID: 6492
// Name: IsGenericDescriptor
// Dependencies: [6473, 1308, 6486, 6477]

// Module 6491 (IsGenericDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 6473 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6477 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 6486 */;


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
