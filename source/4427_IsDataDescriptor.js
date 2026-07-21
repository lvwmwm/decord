// Module ID: 4427
// Function ID: 38869
// Name: IsDataDescriptor
// Dependencies: []

// Module 4427 (IsDataDescriptor)

export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (require(dependencyMap[0])(arg0)) {
    let tmp6 = !tmp11(tmp12[2])(arg0, "[[Value]]");
    if (tmp6) {
      tmp6 = !require(dependencyMap[2])(arg0, "[[Writable]]");
    }
    return !tmp6;
  } else {
    let tmp = tmp11(tmp12[1]);
    const prototype = tmp.prototype;
    tmp = new tmp("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp;
  }
};
