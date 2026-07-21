// Module ID: 4436
// Function ID: 38887
// Name: IsAccessorDescriptor
// Dependencies: []

// Module 4436 (IsAccessorDescriptor)

export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (require(dependencyMap[0])(arg0)) {
    let tmp6 = !tmp11(tmp12[2])(arg0, "[[Get]]");
    if (tmp6) {
      tmp6 = !require(dependencyMap[2])(arg0, "[[Set]]");
    }
    return !tmp6;
  } else {
    let tmp = tmp11(tmp12[1]);
    const prototype = tmp.prototype;
    tmp = new tmp("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp;
  }
};
