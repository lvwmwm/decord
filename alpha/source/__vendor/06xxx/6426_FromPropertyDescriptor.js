// Module ID: 6426
// Function ID: 6427
// Name: FromPropertyDescriptor
// Dependencies: [6420, 1308, 6427]

// Module 6426 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 6420 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 6427 */;


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
