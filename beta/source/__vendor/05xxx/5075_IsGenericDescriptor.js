// Module ID: 5075
// Function ID: 5076
// Name: IsGenericDescriptor
// Dependencies: [5057, 1286, 5070, 5061]

// Module 5075 (IsGenericDescriptor)
import _mod5057 from "module_5057" /* 5057 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5057(arg0)) {
    const tmp7 = tmp(5070)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(5061)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(1286)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
