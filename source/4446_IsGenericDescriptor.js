// Module ID: 4446
// Function ID: 38958
// Name: IsGenericDescriptor
// Dependencies: [4428, 518, 4441, 4432]

// Module 4446 (IsGenericDescriptor)

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (require(4428) /* isPropertyDescriptor */(arg0)) {
    let tmp6 = !tmp11(4441)(arg0);
    if (tmp6) {
      tmp6 = !require(4432) /* IsDataDescriptor */(arg0);
    }
    return tmp6;
  } else {
    let tmp = tmp11(518);
    const prototype = tmp.prototype;
    tmp = new tmp("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp;
  }
};
