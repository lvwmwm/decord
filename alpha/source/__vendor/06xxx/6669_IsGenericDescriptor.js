// Module ID: 6669
// Function ID: 6670
// Name: IsGenericDescriptor
// Dependencies: [6651, 1293, 6664, 6655]

// Module 6669 (IsGenericDescriptor)
import _mod1293 from "module_1293" /* 1293 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 6651 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6655 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 6664 */;


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
