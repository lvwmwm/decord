// Module ID: 4491
// Function ID: 4492
// Name: FromPropertyDescriptor
// Dependencies: [4485, 541, 4492]

// Module 4491 (FromPropertyDescriptor)

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!require(4485) /* isPropertyDescriptor */(arg0)) {
      const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return require(4492) /* fromPropertyDescriptor */(arg0);
};
