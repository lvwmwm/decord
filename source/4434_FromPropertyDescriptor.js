// Module ID: 4434
// Function ID: 38934
// Name: FromPropertyDescriptor
// Dependencies: [4428, 518, 4435]

// Module 4434 (FromPropertyDescriptor)

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!require(4428) /* isPropertyDescriptor */(arg0)) {
      let tmp5 = require(518);
      const prototype = tmp5.prototype;
      tmp5 = new tmp5("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return require(4435) /* fromPropertyDescriptor */(arg0);
};
