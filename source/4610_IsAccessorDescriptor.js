// Module ID: 4610
// Function ID: 4611
// Name: IsAccessorDescriptor
// Dependencies: [4597, 541, 573]

// Module 4610 (IsAccessorDescriptor)

export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (require(4597) /* isPropertyDescriptor */(arg0)) {
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
