// Module ID: 4433
// Function ID: 38922
// Name: FromPropertyDescriptor
// Dependencies: [4427, 518, 4434]

// Module 4433 (FromPropertyDescriptor)

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!require(4427) /* isPropertyDescriptor */(arg0)) {
      let tmp5 = require(518);
      const prototype = tmp5.prototype;
      tmp5 = new tmp5("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return require(4434) /* fromPropertyDescriptor */(arg0);
};
