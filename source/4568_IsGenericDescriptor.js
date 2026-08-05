// Module ID: 4568
// Function ID: 4569
// Name: IsGenericDescriptor
// Dependencies: [4550, 541, 4563, 4554]

// Module 4568 (IsGenericDescriptor)

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (require(4550) /* isPropertyDescriptor */(arg0)) {
    const tmp7 = tmp(4563)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(4554)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
