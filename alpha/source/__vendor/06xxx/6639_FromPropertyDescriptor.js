// Module ID: 6639
// Function ID: 6640
// Name: FromPropertyDescriptor
// Dependencies: [6633, 1293, 6640]

// Module 6639 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 6633 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 6640 */;


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
