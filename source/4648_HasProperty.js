// Module ID: 4648
// Function ID: 4649
// Name: HasProperty
// Dependencies: [4589, 541, 4636]

// Module 4648 (HasProperty)

export default function HasProperty(arg0, arg1) {
  if (require(4589) /* isObject */(arg0)) {
    if (tmp(4636)(arg1)) {
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
