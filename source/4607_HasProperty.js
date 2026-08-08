// Module ID: 4607
// Function ID: 4608
// Name: HasProperty
// Dependencies: [4548, 541, 4595]

// Module 4607 (HasProperty)

export default function HasProperty(arg0, arg1) {
  if (require(4548) /* isObject */(arg0)) {
    if (tmp(4595)(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new tmp(541)("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(541)("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
};
