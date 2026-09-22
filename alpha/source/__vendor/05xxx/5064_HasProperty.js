// Module ID: 5064
// Function ID: 5065
// Name: HasProperty
// Dependencies: [5005, 1282, 5052]

// Module 5064 (HasProperty)
import _mod5005 from "module_5005" /* 5005 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5005(arg0)) {
    if (tmp(5052)(arg1)) {
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
