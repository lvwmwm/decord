// Module ID: 6482
// Function ID: 6483
// Name: FromPropertyDescriptor
// Dependencies: [6476, 1305, 6483]

// Module 6482 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 6476 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 6483 */;


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
