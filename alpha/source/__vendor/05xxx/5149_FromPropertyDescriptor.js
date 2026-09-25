// Module ID: 5149
// Function ID: 5150
// Name: FromPropertyDescriptor
// Dependencies: [5143, 1282, 5150]

// Module 5149 (FromPropertyDescriptor)
import _mod5143 from "module_5143" /* 5143 */;
import _mod5150 from "module_5150" /* 5150 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5143(arg0)) {
      const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return _mod5150(arg0);
};
