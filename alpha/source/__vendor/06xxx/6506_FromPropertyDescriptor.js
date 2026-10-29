// Module ID: 6506
// Function ID: 6507
// Name: FromPropertyDescriptor
// Dependencies: [6500, 1305, 6507]

// Module 6506 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 6500 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 6507 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    const tmp = require;
    if (!isPropertyDescriptor(arg0)) {
      const self = this;
      const self2 = this;
      const tmp3 = new tmp(1305)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp3;
    }
  }
  return fromPropertyDescriptor(arg0);
};
