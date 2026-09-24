// Module ID: 5107
// Function ID: 5108
// Name: IsGenericDescriptor
// Dependencies: [5089, 1286, 5102, 5093]

// Module 5107 (IsGenericDescriptor)
import _mod5089 from "module_5089" /* 5089 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5089(arg0)) {
    const tmp7 = tmp(5102)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(5093)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(1286)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
