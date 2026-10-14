// Module ID: 5713
// Function ID: 5714
// Name: FromPropertyDescriptor
// Dependencies: [5707, 1306, 5714]

// Module 5713 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 5707 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 5714 */;


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
