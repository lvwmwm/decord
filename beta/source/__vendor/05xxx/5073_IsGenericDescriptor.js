// Module ID: 5073
// Function ID: 5074
// Name: IsGenericDescriptor
// Dependencies: [5055, 1282, 5068, 5059]

// Module 5073 (IsGenericDescriptor)
import _mod5055 from "module_5055" /* 5055 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5055(arg0)) {
    const tmp7 = tmp(5068)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(5059)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
