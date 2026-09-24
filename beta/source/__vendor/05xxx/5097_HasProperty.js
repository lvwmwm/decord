// Module ID: 5097
// Function ID: 5098
// Name: HasProperty
// Dependencies: [5038, 1286, 5085]

// Module 5097 (HasProperty)
import _mod5038 from "module_5038" /* 5038 */;


export default function HasProperty(arg0, arg1) {
  if (_mod5038(arg0)) {
    if (tmp(5085)(arg1)) {
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
