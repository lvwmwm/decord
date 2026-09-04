// Module ID: 4825
// Function ID: 4826
// Name: IsDataDescriptor
// Dependencies: [4821, 538, 570]

// Module 4825 (IsDataDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 4821 */;


export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor(arg0)) {
    const tmp7 = tmp(570)(arg0, "[[Value]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(570)(arg0, "[[Writable]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new tmp(538)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
