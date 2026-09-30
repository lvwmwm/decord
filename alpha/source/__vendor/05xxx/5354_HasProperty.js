// Module ID: 5354
// Function ID: 5355
// Name: HasProperty
// Dependencies: [5295, 1282, 5342]

// Module 5354 (HasProperty)
import _mod5295 from "module_5295" /* 5295 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5295(arg0)) {
    if (tmp(5342)(arg1)) {
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
