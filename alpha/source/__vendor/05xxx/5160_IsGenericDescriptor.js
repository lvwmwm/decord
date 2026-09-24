// Module ID: 5160
// Function ID: 5161
// Name: IsGenericDescriptor
// Dependencies: [5142, 1282, 5155, 5146]

// Module 5160 (IsGenericDescriptor)
import _mod5142 from "module_5142" /* 5142 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5142(arg0)) {
    const tmp7 = tmp(5155)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(5146)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
