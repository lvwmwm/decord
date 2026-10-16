// Module ID: 5927
// Function ID: 5928
// Name: FromPropertyDescriptor
// Dependencies: [5921, 1308, 5928]

// Module 5927 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 5921 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 5928 */;


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
