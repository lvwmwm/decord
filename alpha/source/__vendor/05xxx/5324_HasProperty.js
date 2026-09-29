// Module ID: 5324
// Function ID: 5325
// Name: HasProperty
// Dependencies: [5265, 1282, 5312]

// Module 5324 (HasProperty)
import _mod5265 from "module_5265" /* 5265 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5265(arg0)) {
    if (tmp(5312)(arg1)) {
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
