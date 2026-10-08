// Module ID: 5702
// Function ID: 5703
// Name: IsDataDescriptor
// Dependencies: [5698, 1305, 1337]

// Module 5702 (IsDataDescriptor)
import _mod1305 from "module_1305" /* 1305 */;
import bind from "bind" /* 1337 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5698 */;


export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor(arg0)) {
    let tmp6 = !bind(arg0, "[[Value]]");
    bind(arg0, "[[Value]]");
    if (tmp6) {
      tmp6 = !tmp(1337)(arg0, "[[Writable]]");
    }
    return !tmp6;
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1305("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp3;
  }
};
