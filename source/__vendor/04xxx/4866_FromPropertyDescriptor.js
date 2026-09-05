// Module ID: 4866
// Function ID: 4867
// Name: FromPropertyDescriptor
// Dependencies: [4860, 1283, 4867]

// Module 4866 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 4860 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 4867 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!isPropertyDescriptor(arg0)) {
      const tmp5 = new tmp(1283)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return fromPropertyDescriptor(arg0);
};
