// Module ID: 6598
// Function ID: 6599
// Name: iterateValue
// Dependencies: [6599, 6600]

// Module 6598 (iterateValue)
import getIterator from "getIterator" /* 6599 */;


export default function iterateValue(arg0) {
  const tmp3 = getIterator(arg0);
  if (tmp3) {
    let tmp7;
    if (arguments.length > 1) {
      tmp7 = tmp(6600)(tmp3, arguments[1]);
    } else {
      tmp7 = tmp(6600)(tmp3);
    }
    return tmp7;
  } else {
    const self = this;
    const self2 = this;
    const tmp5 = new TypeError("non-iterable value provided");
    throw tmp5;
  }
};
