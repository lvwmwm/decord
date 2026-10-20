// Module ID: 6348
// Function ID: 6349
// Name: iterateValue
// Dependencies: [6349, 6350]

// Module 6348 (iterateValue)
import getIterator from "getIterator" /* 6349 */;


export default function iterateValue(arg0) {
  const tmp3 = getIterator(arg0);
  if (tmp3) {
    let tmp7;
    if (arguments.length > 1) {
      tmp7 = tmp(6350)(tmp3, arguments[1]);
    } else {
      tmp7 = tmp(6350)(tmp3);
    }
    return tmp7;
  } else {
    const self = this;
    const self2 = this;
    const tmp5 = new TypeError("non-iterable value provided");
    throw tmp5;
  }
};
