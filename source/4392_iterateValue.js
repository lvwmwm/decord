// Module ID: 4392
// Function ID: 4393
// Name: iterateValue
// Dependencies: [4393, 4394]

// Module 4392 (iterateValue)

export default function iterateValue(arg0) {
  const tmp3 = require(4393) /* getIterator */(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(4394)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(4394)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
