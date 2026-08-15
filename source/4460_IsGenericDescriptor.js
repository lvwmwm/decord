// Module ID: 4460
// Function ID: 4461
// Name: IsGenericDescriptor
// Dependencies: [4442, 541, 4455, 4446]

// Module 4460 (IsGenericDescriptor)

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (require(4442) /* isPropertyDescriptor */(arg0)) {
    const tmp7 = tmp(4455)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(4446)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
