// Module ID: 5322
// Function ID: 5323
// Name: FromPropertyDescriptor
// Dependencies: [5316, 1282, 5323]

// Module 5322 (FromPropertyDescriptor)
import _mod5316 from "module_5316" /* 5316 */;
import _mod5323 from "module_5323" /* 5323 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5316(arg0)) {
      const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return _mod5323(arg0);
};
