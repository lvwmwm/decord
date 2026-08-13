// Module ID: 4590
// Function ID: 4591
// Name: iterateValue
// Dependencies: [4591, 4592]

// Module 4590 (iterateValue)

export default function iterateValue(arg0) {
  const tmp3 = require(4591) /* getIterator */(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(4592)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(4592)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
