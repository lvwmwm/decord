// Module ID: 4680
// Function ID: 4681
// Name: IsGenericDescriptor
// Dependencies: [4662, 541, 4675, 4666]

// Module 4680 (IsGenericDescriptor)

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (require(4662) /* isPropertyDescriptor */(arg0)) {
    const tmp7 = tmp(4675)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(4666)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
