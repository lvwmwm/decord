// Module ID: 6401
// Function ID: 6402
// Name: FromPropertyDescriptor
// Dependencies: [6395, 1308, 6402]

// Module 6401 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 6395 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 6402 */;


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
