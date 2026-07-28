// Module ID: 4468
// Function ID: 39048
// Name: FromPropertyDescriptor
// Dependencies: [4462, 518, 4469]

// Module 4468 (FromPropertyDescriptor)

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!require(4462) /* isPropertyDescriptor */(arg0)) {
      let tmp5 = require(518);
      const prototype = tmp5.prototype;
      tmp5 = new tmp5("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return require(4469) /* fromPropertyDescriptor */(arg0);
};
