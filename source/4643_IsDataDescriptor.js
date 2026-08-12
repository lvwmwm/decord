// Module ID: 4643
// Function ID: 4644
// Name: IsDataDescriptor
// Dependencies: [4639, 541, 573]

// Module 4643 (IsDataDescriptor)

export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (require(4639) /* isPropertyDescriptor */(arg0)) {
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
