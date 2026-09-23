// Module ID: 5158
// Function ID: 5159
// Name: IsGenericDescriptor
// Dependencies: [5140, 1282, 5153, 5144]

// Module 5158 (IsGenericDescriptor)
import _mod5140 from "module_5140" /* 5140 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5140(arg0)) {
    const tmp7 = tmp(5153)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(5144)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
