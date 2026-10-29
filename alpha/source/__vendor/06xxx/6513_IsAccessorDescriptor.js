// Module ID: 6513
// Function ID: 6514
// Name: IsAccessorDescriptor
// Dependencies: [6500, 1305, 1337]

// Module 6513 (IsAccessorDescriptor)
import _mod1305 from "module_1305" /* 1305 */;
import bind from "bind" /* 1337 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 6500 */;


export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor(arg0)) {
    let tmp6 = !bind(arg0, "[[Get]]");
    bind(arg0, "[[Get]]");
    if (tmp6) {
      tmp6 = !tmp(1337)(arg0, "[[Set]]");
    }
    return !tmp6;
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1305("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp3;
  }
};
