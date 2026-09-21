// Module ID: 5065
// Function ID: 5066
// Name: HasProperty
// Dependencies: [5006, 1286, 5053]

// Module 5065 (HasProperty)
import _mod5006 from "module_5006" /* 5006 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5006(arg0)) {
    if (tmp(5053)(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new tmp(1286)("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1286)("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
};
