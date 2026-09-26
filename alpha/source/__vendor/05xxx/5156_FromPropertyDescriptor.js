// Module ID: 5156
// Function ID: 5157
// Name: FromPropertyDescriptor
// Dependencies: [5150, 1282, 5157]

// Module 5156 (FromPropertyDescriptor)
import _mod5150 from "module_5150" /* 5150 */;
import _mod5157 from "module_5157" /* 5157 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5150(arg0)) {
      const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return _mod5157(arg0);
};
