// Module ID: 5405
// Function ID: 5406
// Name: IsGenericDescriptor
// Dependencies: [5387, 1293, 5400, 5391]

// Module 5405 (IsGenericDescriptor)
import _mod1293 from "module_1293" /* 1293 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5387 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5391 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 5400 */;


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
    const tmp3 = new _mod1293("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp3;
  }
};
