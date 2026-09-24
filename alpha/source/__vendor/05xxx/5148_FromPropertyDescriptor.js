// Module ID: 5148
// Function ID: 5149
// Name: FromPropertyDescriptor
// Dependencies: [5142, 1282, 5149]

// Module 5148 (FromPropertyDescriptor)
import _mod5142 from "module_5142" /* 5142 */;
import _mod5149 from "module_5149" /* 5149 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5142(arg0)) {
      const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return _mod5149(arg0);
};
