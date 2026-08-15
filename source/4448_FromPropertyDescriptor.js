// Module ID: 4448
// Function ID: 4449
// Name: FromPropertyDescriptor
// Dependencies: [4442, 541, 4449]

// Module 4448 (FromPropertyDescriptor)

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!require(4442) /* isPropertyDescriptor */(arg0)) {
      const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return require(4449) /* fromPropertyDescriptor */(arg0);
};
