// Module ID: 4645
// Function ID: 4646
// Name: FromPropertyDescriptor
// Dependencies: [4639, 541, 4646]

// Module 4645 (FromPropertyDescriptor)

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!require(4639) /* isPropertyDescriptor */(arg0)) {
      const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return require(4646) /* fromPropertyDescriptor */(arg0);
};
