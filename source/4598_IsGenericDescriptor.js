// Module ID: 4598
// Function ID: 4599
// Name: IsGenericDescriptor
// Dependencies: [4580, 541, 4593, 4584]

// Module 4598 (IsGenericDescriptor)

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (require(4580) /* isPropertyDescriptor */(arg0)) {
    const tmp7 = tmp(4593)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(4584)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
