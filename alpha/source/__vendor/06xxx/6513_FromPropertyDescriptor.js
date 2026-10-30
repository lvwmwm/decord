// Module ID: 6513
// Function ID: 6514
// Name: FromPropertyDescriptor
// Dependencies: [6507, 1294, 6514]

// Module 6513 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 6507 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 6514 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    const tmp = require;
    if (!isPropertyDescriptor(arg0)) {
      const self = this;
      const self2 = this;
      const tmp3 = new tmp(1294)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp3;
    }
  }
  return fromPropertyDescriptor(arg0);
};
