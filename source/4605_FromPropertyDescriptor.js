// Module ID: 4605
// Function ID: 4606
// Name: FromPropertyDescriptor
// Dependencies: [4599, 541, 4606]

// Module 4605 (FromPropertyDescriptor)

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!require(4599) /* isPropertyDescriptor */(arg0)) {
      const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return require(4606) /* fromPropertyDescriptor */(arg0);
};
