// Module ID: 4377
// Function ID: 38803
// Name: iterateValue
// Dependencies: [4378, 4379]

// Module 4377 (iterateValue)

export default function iterateValue(arg0) {
  const tmp = require(4378) /* getIterator */(arg0);
  if (tmp) {
    if (arguments.length > 1) {
      let tmp9 = require(4379) /* iterateIterator */(tmp, arguments[1]);
    } else {
      tmp9 = require(4379) /* iterateIterator */(tmp);
    }
    return tmp9;
  } else {
    const prototype = TypeError.prototype;
    const tmp5 = new TypeError("non-iterable value provided");
    throw tmp5;
  }
};
