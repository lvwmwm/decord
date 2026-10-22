// Module ID: 6432
// Function ID: 6433
// Name: FromPropertyDescriptor
// Dependencies: [6426, 1308, 6433]

// Module 6432 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 6426 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 6433 */;


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
