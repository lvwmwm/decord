// Module ID: 4819
// Function ID: 4820
// Name: FromPropertyDescriptor
// Dependencies: [4813, 541, 4820]

// Module 4819 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 4813 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 4820 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!isPropertyDescriptor(arg0)) {
      const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return fromPropertyDescriptor(arg0);
};
