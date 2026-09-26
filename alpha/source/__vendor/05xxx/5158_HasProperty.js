// Module ID: 5158
// Function ID: 5159
// Name: HasProperty
// Dependencies: [5099, 1282, 5146]

// Module 5158 (HasProperty)
import _mod5099 from "module_5099" /* 5099 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5099(arg0)) {
    if (tmp(5146)(arg1)) {
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
