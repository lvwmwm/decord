// Module ID: 5386
// Function ID: 5387
// Name: FromPropertyDescriptor
// Dependencies: [5380, 1293, 5387]

// Module 5386 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 5380 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 5387 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    const tmp = require;
    if (!isPropertyDescriptor(arg0)) {
      const self = this;
      const self2 = this;
      const tmp3 = new tmp(1293)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp3;
    }
  }
  return fromPropertyDescriptor(arg0);
};
