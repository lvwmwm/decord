// Module ID: 4503
// Function ID: 4504
// Name: IsGenericDescriptor
// Dependencies: [4485, 541, 4498, 4489]

// Module 4503 (IsGenericDescriptor)

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (require(4485) /* isPropertyDescriptor */(arg0)) {
    const tmp7 = tmp(4498)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(4489)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
