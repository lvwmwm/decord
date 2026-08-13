// Module ID: 4646
// Function ID: 4647
// Name: FromPropertyDescriptor
// Dependencies: [4640, 541, 4647]

// Module 4646 (FromPropertyDescriptor)

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!require(4640) /* isPropertyDescriptor */(arg0)) {
      const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return require(4647) /* fromPropertyDescriptor */(arg0);
};
