// Module ID: 5720
// Function ID: 5721
// Name: IsGenericDescriptor
// Dependencies: [5702, 1306, 5715, 5706]

// Module 5720 (IsGenericDescriptor)
import _mod1306 from "module_1306" /* 1306 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5702 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5706 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 5715 */;


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
