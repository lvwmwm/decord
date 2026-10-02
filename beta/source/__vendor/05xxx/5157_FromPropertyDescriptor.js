// Module ID: 5157
// Function ID: 5158
// Name: FromPropertyDescriptor
// Dependencies: [5151, 1294, 5158]

// Module 5157 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 5151 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 5158 */;


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
