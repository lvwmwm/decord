// Module ID: 4459
// Function ID: 4460
// Name: IsAccessorDescriptor
// Dependencies: [4446, 541, 573]

// Module 4459 (IsAccessorDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 4446 */;


export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor(arg0)) {
    const tmp7 = tmp(573)(arg0, "[[Get]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(573)(arg0, "[[Set]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
