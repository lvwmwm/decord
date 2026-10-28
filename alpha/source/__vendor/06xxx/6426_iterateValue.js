// Module ID: 6426
// Function ID: 6427
// Name: iterateValue
// Dependencies: [6427, 6428]

// Module 6426 (iterateValue)
import getIterator from "getIterator" /* 6427 */;


export default function iterateValue(arg0) {
  const tmp3 = getIterator(arg0);
  if (tmp3) {
    let tmp7;
    if (arguments.length > 1) {
      tmp7 = tmp(6428)(tmp3, arguments[1]);
    } else {
      tmp7 = tmp(6428)(tmp3);
    }
    return tmp7;
  } else {
    const self = this;
    const self2 = this;
    const tmp5 = new TypeError("non-iterable value provided");
    throw tmp5;
  }
};
