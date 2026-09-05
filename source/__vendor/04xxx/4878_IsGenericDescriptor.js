// Module ID: 4878
// Function ID: 4879
// Name: IsGenericDescriptor
// Dependencies: [4860, 1283, 4873, 4864]

// Module 4878 (IsGenericDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 4860 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor(arg0)) {
    const tmp7 = tmp(4873)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(4864)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(1283)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
