// Module ID: 5070
// Function ID: 5071
// Name: IsAccessorDescriptor
// Dependencies: [5057, 1286, 1318]

// Module 5070 (IsAccessorDescriptor)
import _mod5057 from "module_5057" /* 5057 */;


export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5057(arg0)) {
    const tmp7 = tmp(1318)(arg0, "[[Get]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(1318)(arg0, "[[Set]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new tmp(1286)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
