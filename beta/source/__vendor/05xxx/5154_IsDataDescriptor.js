// Module ID: 5154
// Function ID: 5155
// Name: IsDataDescriptor
// Dependencies: [5150, 1282, 1314]

// Module 5154 (IsDataDescriptor)
import _mod1282 from "module_1282" /* 1282 */;
import bind from "bind" /* 1314 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5150 */;


export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor(arg0)) {
    let tmp6 = !bind(arg0, "[[Value]]");
    bind(arg0, "[[Value]]");
    if (tmp6) {
      tmp6 = !tmp(1314)(arg0, "[[Writable]]");
    }
    return !tmp6;
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp3;
  }
};
