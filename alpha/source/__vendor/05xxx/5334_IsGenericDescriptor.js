// Module ID: 5334
// Function ID: 5335
// Name: IsGenericDescriptor
// Dependencies: [5316, 1282, 5329, 5320]

// Module 5334 (IsGenericDescriptor)
import _mod5316 from "module_5316" /* 5316 */;


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5316(arg0)) {
    const tmp7 = tmp(5329)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(5320)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
