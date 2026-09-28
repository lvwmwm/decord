// Module ID: 5168
// Function ID: 5169
// Name: IsGenericDescriptor
// Dependencies: [5150, 1282, 5163, 5154]

// Module 5168 (IsGenericDescriptor)
import _mod5150 from "module_5150" /* 5150 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5150(arg0)) {
    const tmp7 = tmp(5163)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(5154)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
