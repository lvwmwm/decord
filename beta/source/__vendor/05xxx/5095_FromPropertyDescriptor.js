// Module ID: 5095
// Function ID: 5096
// Name: FromPropertyDescriptor
// Dependencies: [5089, 1286, 5096]

// Module 5095 (FromPropertyDescriptor)
import _mod5089 from "module_5089" /* 5089 */;
import _mod5096 from "module_5096" /* 5096 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5089(arg0)) {
      const tmp5 = new tmp(1286)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return _mod5096(arg0);
};
