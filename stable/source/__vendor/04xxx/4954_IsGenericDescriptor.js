// Module ID: 4954
// Function ID: 4955
// Name: IsGenericDescriptor
// Dependencies: [4936, 1281, 4949, 4940]

// Module 4954 (IsGenericDescriptor)
import _mod4936 from "module_4936" /* 4936 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod4936(arg0)) {
    const tmp7 = tmp(4949)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(4940)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(1281)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
