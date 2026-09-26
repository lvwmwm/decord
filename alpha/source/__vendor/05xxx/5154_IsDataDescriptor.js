// Module ID: 5154
// Function ID: 5155
// Name: IsDataDescriptor
// Dependencies: [5150, 1282, 1314]

// Module 5154 (IsDataDescriptor)
import _mod5150 from "module_5150" /* 5150 */;


export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5150(arg0)) {
    const tmp7 = tmp(1314)(arg0, "[[Value]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(1314)(arg0, "[[Writable]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
