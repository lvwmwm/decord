// Module ID: 4441
// Function ID: 38948
// Name: IsAccessorDescriptor
// Dependencies: [4428, 518, 550]

// Module 4441 (IsAccessorDescriptor)

export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (require(4428) /* isPropertyDescriptor */(arg0)) {
    let tmp6 = !tmp11(550)(arg0, "[[Get]]");
    if (tmp6) {
      tmp6 = !require(550) /* bind */(arg0, "[[Set]]");
    }
    return !tmp6;
  } else {
    let tmp = tmp11(518);
    const prototype = tmp.prototype;
    tmp = new tmp("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp;
  }
};
