// Module ID: 4431
// Function ID: 38918
// Name: IsDataDescriptor
// Dependencies: [4427, 518, 550]

// Module 4431 (IsDataDescriptor)

export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (require(4427) /* isPropertyDescriptor */(arg0)) {
    let tmp6 = !tmp11(550)(arg0, "[[Value]]");
    if (tmp6) {
      tmp6 = !require(550) /* bind */(arg0, "[[Writable]]");
    }
    return !tmp6;
  } else {
    let tmp = tmp11(518);
    const prototype = tmp.prototype;
    tmp = new tmp("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp;
  }
};
