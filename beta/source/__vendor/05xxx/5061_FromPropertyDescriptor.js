// Module ID: 5061
// Function ID: 5062
// Name: FromPropertyDescriptor
// Dependencies: [5055, 1282, 5062]

// Module 5061 (FromPropertyDescriptor)
import _mod5055 from "module_5055" /* 5055 */;
import _mod5062 from "module_5062" /* 5062 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5055(arg0)) {
      const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return _mod5062(arg0);
};
