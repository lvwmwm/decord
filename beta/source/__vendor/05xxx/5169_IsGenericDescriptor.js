// Module ID: 5169
// Function ID: 5170
// Name: IsGenericDescriptor
// Dependencies: [5151, 1294, 5164, 5155]

// Module 5169 (IsGenericDescriptor)
import _mod1294 from "module_1294" /* 1294 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5151 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5155 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 5164 */;


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
