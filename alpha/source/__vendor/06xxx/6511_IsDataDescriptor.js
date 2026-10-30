// Module ID: 6511
// Function ID: 6512
// Name: IsDataDescriptor
// Dependencies: [6507, 1294, 1326]

// Module 6511 (IsDataDescriptor)
import _mod1294 from "module_1294" /* 1294 */;
import bind from "bind" /* 1326 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 6507 */;


export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor(arg0)) {
    let tmp6 = !bind(arg0, "[[Value]]");
    bind(arg0, "[[Value]]");
    if (tmp6) {
      tmp6 = !tmp(1326)(arg0, "[[Writable]]");
    }
    return !tmp6;
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1294("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp3;
  }
};
