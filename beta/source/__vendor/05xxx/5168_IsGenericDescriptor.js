// Module ID: 5168
// Function ID: 5169
// Name: IsGenericDescriptor
// Dependencies: [5150, 1282, 5163, 5154]

// Module 5168 (IsGenericDescriptor)
import _mod1282 from "module_1282" /* 1282 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5150 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5154 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 5163 */;


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
    const tmp3 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp3;
  }
};
