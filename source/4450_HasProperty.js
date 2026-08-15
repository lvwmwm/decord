// Module ID: 4450
// Function ID: 4451
// Name: HasProperty
// Dependencies: [4391, 541, 4438]

// Module 4450 (HasProperty)

export default function HasProperty(arg0, arg1) {
  if (require(4391) /* isObject */(arg0)) {
    if (tmp(4438)(arg1)) {
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
