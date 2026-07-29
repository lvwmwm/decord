// Module ID: 4493
// Function ID: 4494
// Name: HasProperty
// Dependencies: [4434, 541, 4481]

// Module 4493 (HasProperty)

export default function HasProperty(arg0, arg1) {
  if (require(4434) /* isObject */(arg0)) {
    if (tmp(4481)(arg1)) {
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
