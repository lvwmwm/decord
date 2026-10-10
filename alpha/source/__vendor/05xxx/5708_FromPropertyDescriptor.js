// Module ID: 5708
// Function ID: 5709
// Name: FromPropertyDescriptor
// Dependencies: [5702, 1306, 5709]

// Module 5708 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 5702 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 5709 */;


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
