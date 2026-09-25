// Module ID: 5151
// Function ID: 5152
// Name: HasProperty
// Dependencies: [5092, 1282, 5139]

// Module 5151 (HasProperty)
import _mod5092 from "module_5092" /* 5092 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5092(arg0)) {
    if (tmp(5139)(arg1)) {
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
