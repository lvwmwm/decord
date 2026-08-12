// Module ID: 4589
// Function ID: 4590
// Name: iterateValue
// Dependencies: [4590, 4591]

// Module 4589 (iterateValue)

export default function iterateValue(arg0) {
  const tmp3 = require(4590) /* getIterator */(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(4591)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(4591)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
