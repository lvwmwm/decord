// Module ID: 4378
// Function ID: 38816
// Name: iterateValue
// Dependencies: [4379, 4380]

// Module 4378 (iterateValue)

export default function iterateValue(arg0) {
  const tmp = require(4379) /* getIterator */(arg0);
  if (tmp) {
    if (arguments.length > 1) {
      let tmp9 = require(4380) /* iterateIterator */(tmp, arguments[1]);
    } else {
      tmp9 = require(4380) /* iterateIterator */(tmp);
    }
    return tmp9;
  } else {
    const prototype = TypeError.prototype;
    const tmp5 = new TypeError("non-iterable value provided");
    throw tmp5;
  }
};
