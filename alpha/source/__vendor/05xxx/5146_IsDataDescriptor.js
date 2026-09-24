// Module ID: 5146
// Function ID: 5147
// Name: IsDataDescriptor
// Dependencies: [5142, 1282, 1314]

// Module 5146 (IsDataDescriptor)
import _mod5142 from "module_5142" /* 5142 */;


export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5142(arg0)) {
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
