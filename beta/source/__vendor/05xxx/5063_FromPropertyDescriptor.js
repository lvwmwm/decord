// Module ID: 5063
// Function ID: 5064
// Name: FromPropertyDescriptor
// Dependencies: [5057, 1286, 5064]

// Module 5063 (FromPropertyDescriptor)
import _mod5057 from "module_5057" /* 5057 */;
import _mod5064 from "module_5064" /* 5064 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5057(arg0)) {
      const tmp5 = new tmp(1286)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return _mod5064(arg0);
};
