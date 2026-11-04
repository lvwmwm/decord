// Module ID: 6654
// Function ID: 6655
// Name: FromPropertyDescriptor
// Dependencies: [6648, 1293, 6655]

// Module 6654 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 6648 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 6655 */;


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
