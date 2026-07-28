// Module ID: 4412
// Function ID: 38930
// Name: iterateValue
// Dependencies: [4413, 4414]

// Module 4412 (iterateValue)

export default function iterateValue(arg0) {
  const tmp = require(4413) /* getIterator */(arg0);
  if (tmp) {
    if (arguments.length > 1) {
      let tmp9 = require(4414) /* iterateIterator */(tmp, arguments[1]);
    } else {
      tmp9 = require(4414) /* iterateIterator */(tmp);
    }
    return tmp9;
  } else {
    const prototype = TypeError.prototype;
    const tmp5 = new TypeError("non-iterable value provided");
    throw tmp5;
  }
};
