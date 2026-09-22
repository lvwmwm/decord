// Module ID: 5062
// Function ID: 5063
// Name: FromPropertyDescriptor
// Dependencies: [5056, 1282, 5063]

// Module 5062 (FromPropertyDescriptor)
import _mod5056 from "module_5056" /* 5056 */;
import _mod5063 from "module_5063" /* 5063 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5056(arg0)) {
      const tmp5 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return _mod5063(arg0);
};
