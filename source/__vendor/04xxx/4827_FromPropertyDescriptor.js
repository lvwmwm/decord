// Module ID: 4827
// Function ID: 4828
// Name: FromPropertyDescriptor
// Dependencies: [4821, 538, 4828]

// Module 4827 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 4821 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 4828 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!isPropertyDescriptor(arg0)) {
      const tmp5 = new tmp(538)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return fromPropertyDescriptor(arg0);
};
