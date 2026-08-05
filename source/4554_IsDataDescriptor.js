// Module ID: 4554
// Function ID: 4555
// Name: IsDataDescriptor
// Dependencies: [4550, 541, 573]

// Module 4554 (IsDataDescriptor)

export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (require(4550) /* isPropertyDescriptor */(arg0)) {
    const tmp7 = tmp(573)(arg0, "[[Value]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(573)(arg0, "[[Writable]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
