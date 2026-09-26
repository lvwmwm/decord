// Module ID: 5093
// Function ID: 5094
// Name: FromPropertyDescriptor
// Dependencies: [5087, 1282, 5094]

// Module 5093 (FromPropertyDescriptor)
import _mod5087 from "module_5087" /* 5087 */;
import _mod5094 from "module_5094" /* 5094 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5087(arg0)) {
      const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return _mod5094(arg0);
};
