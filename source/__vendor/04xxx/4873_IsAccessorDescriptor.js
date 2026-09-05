// Module ID: 4873
// Function ID: 4874
// Name: IsAccessorDescriptor
// Dependencies: [4860, 1283, 1315]

// Module 4873 (IsAccessorDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 4860 */;


export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor(arg0)) {
    const tmp7 = tmp(1315)(arg0, "[[Get]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(1315)(arg0, "[[Set]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new tmp(1283)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
