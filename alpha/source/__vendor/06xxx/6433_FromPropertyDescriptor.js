// Module ID: 6433
// Function ID: 6434
// Name: FromPropertyDescriptor
// Dependencies: [6427, 1308, 6434]

// Module 6433 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 6427 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 6434 */;


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
