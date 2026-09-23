// Module ID: 5148
// Function ID: 5149
// Name: HasProperty
// Dependencies: [5089, 1282, 5136]

// Module 5148 (HasProperty)
import _mod5089 from "module_5089" /* 5089 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5089(arg0)) {
    if (tmp(5136)(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new tmp(1282)("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
};
