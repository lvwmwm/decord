// Module ID: 5705
// Function ID: 5706
// Name: FromPropertyDescriptor
// Dependencies: [5699, 1306, 5706]

// Module 5705 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 5699 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 5706 */;


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
