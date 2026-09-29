// Module ID: 5105
// Function ID: 5106
// Name: IsGenericDescriptor
// Dependencies: [5087, 1282, 5100, 5091]

// Module 5105 (IsGenericDescriptor)
import _mod5087 from "module_5087" /* 5087 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5087(arg0)) {
    const tmp7 = tmp(5100)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(5091)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
