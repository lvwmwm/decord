// Module ID: 4588
// Function ID: 4589
// Name: HasProperty
// Dependencies: [4529, 541, 4576]

// Module 4588 (HasProperty)

export default function HasProperty(arg0, arg1) {
  if (require(4529) /* isObject */(arg0)) {
    if (tmp(4576)(arg1)) {
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
