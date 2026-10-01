// Module ID: 5156
// Function ID: 5157
// Name: FromPropertyDescriptor
// Dependencies: [5150, 1282, 5157]

// Module 5156 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 5150 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 5157 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    const tmp = require;
    if (!isPropertyDescriptor(arg0)) {
      const self = this;
      const self2 = this;
      const tmp3 = new tmp(1282)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp3;
    }
  }
  return fromPropertyDescriptor(arg0);
};
