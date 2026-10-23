// Module ID: 6445
// Function ID: 6446
// Name: FromPropertyDescriptor
// Dependencies: [6439, 1308, 6446]

// Module 6445 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 6439 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 6446 */;


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
