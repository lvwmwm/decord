// Module ID: 5936
// Function ID: 5937
// Name: IsGenericDescriptor
// Dependencies: [5918, 1306, 5931, 5922]

// Module 5936 (IsGenericDescriptor)
import _mod1306 from "module_1306" /* 1306 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5918 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5922 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 5931 */;


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
    const tmp3 = new _mod1306("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp3;
  }
};
