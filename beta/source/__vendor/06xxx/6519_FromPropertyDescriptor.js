// Module ID: 6519
// Function ID: 6520
// Name: FromPropertyDescriptor
// Dependencies: [6513, 1293, 6520]

// Module 6519 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 6513 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 6520 */;


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
