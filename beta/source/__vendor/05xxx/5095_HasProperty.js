// Module ID: 5095
// Function ID: 5096
// Name: HasProperty
// Dependencies: [5036, 1282, 5083]

// Module 5095 (HasProperty)
import _mod5036 from "module_5036" /* 5036 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5036(arg0)) {
    if (tmp(5083)(arg1)) {
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
