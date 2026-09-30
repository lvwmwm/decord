// Module ID: 5364
// Function ID: 5365
// Name: IsGenericDescriptor
// Dependencies: [5346, 1282, 5359, 5350]

// Module 5364 (IsGenericDescriptor)
import _mod5346 from "module_5346" /* 5346 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5346(arg0)) {
    const tmp7 = tmp(5359)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(5350)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
