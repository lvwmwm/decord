// Module ID: 5393
// Function ID: 5394
// Name: FromPropertyDescriptor
// Dependencies: [5387, 1293, 5394]

// Module 5393 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 5387 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 5394 */;


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
