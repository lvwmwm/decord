// Module ID: 4657
// Function ID: 4658
// Name: IsGenericDescriptor
// Dependencies: [4639, 541, 4652, 4643]

// Module 4657 (IsGenericDescriptor)

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (require(4639) /* isPropertyDescriptor */(arg0)) {
    const tmp7 = tmp(4652)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(4643)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
