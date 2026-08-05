// Module ID: 4556
// Function ID: 4557
// Name: FromPropertyDescriptor
// Dependencies: [4550, 541, 4557]

// Module 4556 (FromPropertyDescriptor)

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!require(4550) /* isPropertyDescriptor */(arg0)) {
      const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return require(4557) /* fromPropertyDescriptor */(arg0);
};
