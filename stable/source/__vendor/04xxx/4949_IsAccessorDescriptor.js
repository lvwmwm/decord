// Module ID: 4949
// Function ID: 4950
// Name: IsAccessorDescriptor
// Dependencies: [4936, 1281, 1313]

// Module 4949 (IsAccessorDescriptor)
import _mod4936 from "module_4936" /* 4936 */;


export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod4936(arg0)) {
    const tmp7 = tmp(1313)(arg0, "[[Get]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(1313)(arg0, "[[Set]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new tmp(1281)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
