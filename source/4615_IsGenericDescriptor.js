// Module ID: 4615
// Function ID: 4616
// Name: IsGenericDescriptor
// Dependencies: [4597, 541, 4610, 4601]

// Module 4615 (IsGenericDescriptor)

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (require(4597) /* isPropertyDescriptor */(arg0)) {
    const tmp7 = tmp(4610)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(4601)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};
