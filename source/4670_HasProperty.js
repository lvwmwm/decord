// Module ID: 4670
// Function ID: 4671
// Name: HasProperty
// Dependencies: [4611, 541, 4658]

// Module 4670 (HasProperty)

export default function HasProperty(arg0, arg1) {
  if (require(4611) /* isObject */(arg0)) {
    if (tmp(4658)(arg1)) {
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
