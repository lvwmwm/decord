// Module ID: 5926
// Function ID: 5927
// Name: FromPropertyDescriptor
// Dependencies: [5920, 1308, 5927]

// Module 5926 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 5920 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 5927 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    const tmp = require;
    if (!isPropertyDescriptor(arg0)) {
      const self = this;
      const self2 = this;
      const tmp3 = new tmp(1308)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp3;
    }
  }
  return fromPropertyDescriptor(arg0);
};
