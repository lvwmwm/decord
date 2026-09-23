// Module ID: 5146
// Function ID: 5147
// Name: FromPropertyDescriptor
// Dependencies: [5140, 1282, 5147]

// Module 5146 (FromPropertyDescriptor)
import _mod5140 from "module_5140" /* 5140 */;
import _mod5147 from "module_5147" /* 5147 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5140(arg0)) {
      const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return _mod5147(arg0);
};
