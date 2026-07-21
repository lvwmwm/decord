// Module ID: 4441
// Function ID: 38906
// Name: IsGenericDescriptor
// Dependencies: []

// Module 4441 (IsGenericDescriptor)

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (require(dependencyMap[0])(arg0)) {
    let tmp6 = !tmp11(tmp12[2])(arg0);
    if (tmp6) {
      tmp6 = !require(dependencyMap[3])(arg0);
    }
    return tmp6;
  } else {
    let tmp = tmp11(tmp12[1]);
    const prototype = tmp.prototype;
    tmp = new tmp("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp;
  }
};
