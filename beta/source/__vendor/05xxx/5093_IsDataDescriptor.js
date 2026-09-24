// Module ID: 5093
// Function ID: 5094
// Name: IsDataDescriptor
// Dependencies: [5089, 1286, 1318]

// Module 5093 (IsDataDescriptor)
import _mod5089 from "module_5089" /* 5089 */;


export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5089(arg0)) {
    const tmp7 = tmp(1318)(arg0, "[[Value]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(1318)(arg0, "[[Writable]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new tmp(1286)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
