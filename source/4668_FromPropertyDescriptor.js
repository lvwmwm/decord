// Module ID: 4668
// Function ID: 4669
// Name: FromPropertyDescriptor
// Dependencies: [4662, 541, 4669]

// Module 4668 (FromPropertyDescriptor)

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!require(4662) /* isPropertyDescriptor */(arg0)) {
      const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return require(4669) /* fromPropertyDescriptor */(arg0);
};
