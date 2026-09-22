// Module ID: 4944
// Function ID: 4945
// Name: HasProperty
// Dependencies: [4885, 1281, 4932]

// Module 4944 (HasProperty)
import _mod4885 from "module_4885" /* 4885 */;


export default function HasProperty(arg0, arg1) {
  if (_mod4885(arg0)) {
    if (tmp(4932)(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new tmp(1281)("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1281)("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
};
