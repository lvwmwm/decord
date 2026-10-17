// Module ID: 5964
// Function ID: 5965
// Name: FromPropertyDescriptor
// Dependencies: [5958, 1308, 5965]

// Module 5964 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 5958 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 5965 */;


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
