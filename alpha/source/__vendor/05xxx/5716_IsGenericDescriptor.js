// Module ID: 5716
// Function ID: 5717
// Name: IsGenericDescriptor
// Dependencies: [5698, 1305, 5711, 5702]

// Module 5716 (IsGenericDescriptor)
import _mod1305 from "module_1305" /* 1305 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5698 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5702 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 5711 */;


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
