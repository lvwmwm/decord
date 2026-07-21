// Module ID: 4429
// Function ID: 38873
// Name: FromPropertyDescriptor
// Dependencies: []

// Module 4429 (FromPropertyDescriptor)

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!require(dependencyMap[0])(arg0)) {
      let tmp5 = require(dependencyMap[1]);
      const prototype = tmp5.prototype;
      tmp5 = new tmp5("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return require(dependencyMap[2])(arg0);
};
