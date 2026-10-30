// Module ID: 6525
// Function ID: 6526
// Name: IsGenericDescriptor
// Dependencies: [6507, 1294, 6520, 6511]

// Module 6525 (IsGenericDescriptor)
import _mod1294 from "module_1294" /* 1294 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 6507 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6511 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 6520 */;


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
    const tmp3 = new _mod1294("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp3;
  }
};
