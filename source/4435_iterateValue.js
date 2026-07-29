// Module ID: 4435
// Function ID: 4436
// Name: iterateValue
// Dependencies: [4436, 4437]

// Module 4435 (iterateValue)

export default function iterateValue(arg0) {
  const tmp3 = require(4436) /* getIterator */(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(4437)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(4437)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
