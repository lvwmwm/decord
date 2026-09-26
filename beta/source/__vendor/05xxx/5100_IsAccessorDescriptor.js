// Module ID: 5100
// Function ID: 5101
// Name: IsAccessorDescriptor
// Dependencies: [5087, 1282, 1314]

// Module 5100 (IsAccessorDescriptor)
import _mod5087 from "module_5087" /* 5087 */;


export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5087(arg0)) {
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
