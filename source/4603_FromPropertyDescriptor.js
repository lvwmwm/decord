// Module ID: 4603
// Function ID: 4604
// Name: FromPropertyDescriptor
// Dependencies: [4597, 541, 4604]

// Module 4603 (FromPropertyDescriptor)

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!require(4597) /* isPropertyDescriptor */(arg0)) {
      const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return require(4604) /* fromPropertyDescriptor */(arg0);
};
