// Module ID: 5352
// Function ID: 5353
// Name: IsGenericDescriptor
// Dependencies: [5334, 1282, 5347, 5338]

// Module 5352 (IsGenericDescriptor)
import _mod5334 from "module_5334" /* 5334 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5334(arg0)) {
    const tmp7 = tmp(5347)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(5338)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
