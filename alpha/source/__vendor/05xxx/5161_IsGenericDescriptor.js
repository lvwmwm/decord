// Module ID: 5161
// Function ID: 5162
// Name: IsGenericDescriptor
// Dependencies: [5143, 1282, 5156, 5147]

// Module 5161 (IsGenericDescriptor)
import _mod5143 from "module_5143" /* 5143 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5143(arg0)) {
    const tmp7 = tmp(5156)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(5147)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
