// Module ID: 4440
// Function ID: 38935
// Name: IsAccessorDescriptor
// Dependencies: [4427, 518, 550]

// Module 4440 (IsAccessorDescriptor)

export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (require(4427) /* isPropertyDescriptor */(arg0)) {
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
