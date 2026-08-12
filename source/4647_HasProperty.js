// Module ID: 4647
// Function ID: 4648
// Name: HasProperty
// Dependencies: [4588, 541, 4635]

// Module 4647 (HasProperty)

export default function HasProperty(arg0, arg1) {
  if (require(4588) /* isObject */(arg0)) {
    if (tmp(4635)(arg1)) {
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
