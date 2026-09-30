// Module ID: 5352
// Function ID: 5353
// Name: FromPropertyDescriptor
// Dependencies: [5346, 1282, 5353]

// Module 5352 (FromPropertyDescriptor)
import _mod5346 from "module_5346" /* 5346 */;
import _mod5353 from "module_5353" /* 5353 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5346(arg0)) {
      const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return _mod5353(arg0);
};
