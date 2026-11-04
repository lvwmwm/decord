// Module ID: 6479
// Function ID: 6480
// Name: FromPropertyDescriptor
// Dependencies: [6473, 1308, 6480]

// Module 6479 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 6473 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 6480 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    const tmp = require;
    if (!isPropertyDescriptor(arg0)) {
      const self = this;
      const self2 = this;
      const tmp3 = new tmp(1308)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp3;
    }
  }
  return fromPropertyDescriptor(arg0);
};
