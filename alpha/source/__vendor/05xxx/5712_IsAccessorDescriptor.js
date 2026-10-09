// Module ID: 5712
// Function ID: 5713
// Name: IsAccessorDescriptor
// Dependencies: [5699, 1306, 1338]

// Module 5712 (IsAccessorDescriptor)
import _mod1306 from "module_1306" /* 1306 */;
import bind from "bind" /* 1338 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5699 */;


export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor(arg0)) {
    let tmp6 = !bind(arg0, "[[Get]]");
    bind(arg0, "[[Get]]");
    if (tmp6) {
      tmp6 = !tmp(1338)(arg0, "[[Set]]");
    }
    return !tmp6;
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1306("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp3;
  }
};
