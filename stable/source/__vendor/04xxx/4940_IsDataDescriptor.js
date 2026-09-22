// Module ID: 4940
// Function ID: 4941
// Name: IsDataDescriptor
// Dependencies: [4936, 1281, 1313]

// Module 4940 (IsDataDescriptor)
import _mod4936 from "module_4936" /* 4936 */;


export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod4936(arg0)) {
    const tmp7 = tmp(1313)(arg0, "[[Value]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(1313)(arg0, "[[Writable]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new tmp(1281)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
