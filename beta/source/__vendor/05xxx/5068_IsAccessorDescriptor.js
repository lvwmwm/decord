// Module ID: 5068
// Function ID: 5069
// Name: IsAccessorDescriptor
// Dependencies: [5055, 1282, 1314]

// Module 5068 (IsAccessorDescriptor)
import _mod5055 from "module_5055" /* 5055 */;


export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5055(arg0)) {
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
