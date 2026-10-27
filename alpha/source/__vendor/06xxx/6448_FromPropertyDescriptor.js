// Module ID: 6448
// Function ID: 6449
// Name: FromPropertyDescriptor
// Dependencies: [6442, 1305, 6449]

// Module 6448 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 6442 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 6449 */;


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
