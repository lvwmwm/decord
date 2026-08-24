// Module ID: 4464
// Function ID: 4465
// Name: IsGenericDescriptor
// Dependencies: [4446, 541, 4459, 4450]

// Module 4464 (IsGenericDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 4446 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor(arg0)) {
    const tmp7 = tmp(4459)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(4450)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
