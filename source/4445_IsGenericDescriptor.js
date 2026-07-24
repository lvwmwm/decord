// Module ID: 4445
// Function ID: 38947
// Name: IsGenericDescriptor
// Dependencies: [4427, 518, 4440, 4431]

// Module 4445 (IsGenericDescriptor)

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (require(4427) /* isPropertyDescriptor */(arg0)) {
    let tmp6 = !tmp11(4440)(arg0);
    if (tmp6) {
      tmp6 = !require(4431) /* IsDataDescriptor */(arg0);
    }
    return tmp6;
  } else {
    let tmp = tmp11(518);
    const prototype = tmp.prototype;
    tmp = new tmp("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp;
  }
};
