// Module ID: 5962
// Function ID: 5963
// Name: IsDataDescriptor
// Dependencies: [5958, 1308, 1340]

// Module 5962 (IsDataDescriptor)
import _mod1308 from "module_1308" /* 1308 */;
import bind from "bind" /* 1340 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5958 */;


export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor(arg0)) {
    let tmp6 = !bind(arg0, "[[Value]]");
    bind(arg0, "[[Value]]");
    if (tmp6) {
      tmp6 = !tmp(1340)(arg0, "[[Writable]]");
    }
    return !tmp6;
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp3;
  }
};
