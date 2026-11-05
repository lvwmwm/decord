// Module ID: 6657
// Function ID: 6658
// Name: FromPropertyDescriptor
// Dependencies: [6651, 1293, 6658]

// Module 6657 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 6651 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 6658 */;


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
