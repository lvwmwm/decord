// Module ID: 5971
// Function ID: 5972
// Name: IsAccessorDescriptor
// Dependencies: [5958, 1308, 1340]

// Module 5971 (IsAccessorDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import bind from "bind" /* 1340 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5958 */;


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
