// Module ID: 6447
// Function ID: 6448
// Name: FromPropertyDescriptor
// Dependencies: [6441, 1308, 6448]

// Module 6447 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 6441 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 6448 */;


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
