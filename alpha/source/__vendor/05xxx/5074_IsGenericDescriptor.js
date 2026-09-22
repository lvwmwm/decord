// Module ID: 5074
// Function ID: 5075
// Name: IsGenericDescriptor
// Dependencies: [5056, 1282, 5069, 5060]

// Module 5074 (IsGenericDescriptor)
import _mod5056 from "module_5056" /* 5056 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5056(arg0)) {
    const tmp7 = tmp(5069)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(5060)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
