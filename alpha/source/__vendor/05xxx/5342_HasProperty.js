// Module ID: 5342
// Function ID: 5343
// Name: HasProperty
// Dependencies: [5283, 1282, 5330]

// Module 5342 (HasProperty)
import _mod5283 from "module_5283" /* 5283 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5283(arg0)) {
    if (tmp(5330)(arg1)) {
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
