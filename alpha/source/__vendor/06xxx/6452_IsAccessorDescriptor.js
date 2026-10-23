// Module ID: 6452
// Function ID: 6453
// Name: IsAccessorDescriptor
// Dependencies: [6439, 1308, 1340]

// Module 6452 (IsAccessorDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import bind from "bind" /* 1340 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 6439 */;


export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor(arg0)) {
    let tmp6 = !bind(arg0, "[[Get]]");
    bind(arg0, "[[Get]]");
    if (tmp6) {
      tmp6 = !tmp(1340)(arg0, "[[Set]]");
    }
    return !tmp6;
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp3;
  }
};
