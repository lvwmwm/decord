// Module ID: 5150
// Function ID: 5151
// Name: HasProperty
// Dependencies: [5091, 1282, 5138]

// Module 5150 (HasProperty)
import _mod5091 from "module_5091" /* 5091 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5091(arg0)) {
    if (tmp(5138)(arg1)) {
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
