// Module ID: 6370
// Function ID: 6371
// Name: iterateValue
// Dependencies: [6371, 6372]

// Module 6370 (iterateValue)
import getIterator from "getIterator" /* 6371 */;


export default function iterateValue(arg0) {
  const tmp3 = getIterator(arg0);
  if (tmp3) {
    let tmp7;
    if (arguments.length > 1) {
      tmp7 = tmp(6372)(tmp3, arguments[1]);
    } else {
      tmp7 = tmp(6372)(tmp3);
    }
    return tmp7;
  } else {
    const self = this;
    const self2 = this;
    const tmp5 = new TypeError("non-iterable value provided");
    throw tmp5;
  }
};
