// Module ID: 6404
// Function ID: 6405
// Name: FromPropertyDescriptor
// Dependencies: [6398, 1308, 6405]

// Module 6404 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 6398 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 6405 */;


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
