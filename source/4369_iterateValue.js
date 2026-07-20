// Module ID: 4369
// Function ID: 38707
// Name: iterateValue
// Dependencies: []

// Module 4369 (iterateValue)

export default function iterateValue(arg0) {
  const tmp = require(dependencyMap[0])(arg0);
  if (tmp) {
    if (arguments.length > 1) {
      let tmp9 = require(dependencyMap[1])(tmp, arguments[1]);
    } else {
      tmp9 = require(dependencyMap[1])(tmp);
    }
    return tmp9;
  } else {
    const prototype = TypeError.prototype;
    const tmp5 = new TypeError("non-iterable value provided");
    throw tmp5;
  }
};
