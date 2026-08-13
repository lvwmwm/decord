// Module ID: 4658
// Function ID: 4659
// Name: IsGenericDescriptor
// Dependencies: [4640, 541, 4653, 4644]

// Module 4658 (IsGenericDescriptor)

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (require(4640) /* isPropertyDescriptor */(arg0)) {
    const tmp7 = tmp(4653)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(4644)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
