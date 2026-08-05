// Module ID: 4558
// Function ID: 4559
// Name: HasProperty
// Dependencies: [4499, 541, 4546]

// Module 4558 (HasProperty)

export default function HasProperty(arg0, arg1) {
  if (require(4499) /* isObject */(arg0)) {
    if (tmp(4546)(arg1)) {
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
