// Module ID: 6460
// Function ID: 6461
// Name: IsGenericDescriptor
// Dependencies: [6442, 1305, 6455, 6446]

// Module 6460 (IsGenericDescriptor)
import _mod1305 from "module_1305" /* 1305 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 6442 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6446 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 6455 */;


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
