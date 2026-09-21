// Module ID: 5063
// Function ID: 5064
// Name: HasProperty
// Dependencies: [5004, 1282, 5051]

// Module 5063 (HasProperty)
import _mod5004 from "module_5004" /* 5004 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5004(arg0)) {
    if (tmp(5051)(arg1)) {
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
