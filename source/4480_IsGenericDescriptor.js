// Module ID: 4480
// Function ID: 39073
// Name: IsGenericDescriptor
// Dependencies: [4462, 518, 4475, 4466]

// Module 4480 (IsGenericDescriptor)

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (require(4462) /* isPropertyDescriptor */(arg0)) {
    let tmp6 = !tmp11(4475)(arg0);
    if (tmp6) {
      tmp6 = !require(4466) /* IsDataDescriptor */(arg0);
    }
    return tmp6;
  } else {
    let tmp = tmp11(518);
    const prototype = tmp.prototype;
    tmp = new tmp("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp;
  }
};
