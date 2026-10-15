// Module ID: 5924
// Function ID: 5925
// Name: FromPropertyDescriptor
// Dependencies: [5918, 1306, 5925]

// Module 5924 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 5918 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 5925 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    const tmp = require;
    if (!isPropertyDescriptor(arg0)) {
      const self = this;
      const self2 = this;
      const tmp3 = new tmp(1306)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp3;
    }
  }
  return fromPropertyDescriptor(arg0);
};
