// Module ID: 4942
// Function ID: 4943
// Name: FromPropertyDescriptor
// Dependencies: [4936, 1281, 4943]

// Module 4942 (FromPropertyDescriptor)
import _mod4936 from "module_4936" /* 4936 */;
import _mod4943 from "module_4943" /* 4943 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod4936(arg0)) {
      const tmp5 = new tmp(1281)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return _mod4943(arg0);
};
