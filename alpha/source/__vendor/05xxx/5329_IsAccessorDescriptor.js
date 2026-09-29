// Module ID: 5329
// Function ID: 5330
// Name: IsAccessorDescriptor
// Dependencies: [5316, 1282, 1314]

// Module 5329 (IsAccessorDescriptor)
import _mod5316 from "module_5316" /* 5316 */;


export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5316(arg0)) {
    const tmp7 = tmp(1314)(arg0, "[[Get]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(1314)(arg0, "[[Set]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
