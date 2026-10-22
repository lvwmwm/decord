// Module ID: 6377
// Function ID: 6378
// Name: iterateValue
// Dependencies: [6378, 6379]

// Module 6377 (iterateValue)
import getIterator from "getIterator" /* 6378 */;


export default function iterateValue(arg0) {
  const tmp3 = getIterator(arg0);
  if (tmp3) {
    let tmp7;
    if (arguments.length > 1) {
      tmp7 = tmp(6379)(tmp3, arguments[1]);
    } else {
      tmp7 = tmp(6379)(tmp3);
    }
    return tmp7;
  } else {
    const self = this;
    const self2 = this;
    const tmp5 = new TypeError("non-iterable value provided");
    throw tmp5;
  }
};
