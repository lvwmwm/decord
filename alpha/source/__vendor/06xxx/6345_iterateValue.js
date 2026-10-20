// Module ID: 6345
// Function ID: 6346
// Name: iterateValue
// Dependencies: [6346, 6347]

// Module 6345 (iterateValue)
import getIterator from "getIterator" /* 6346 */;


export default function iterateValue(arg0) {
  const tmp3 = getIterator(arg0);
  if (tmp3) {
    let tmp7;
    if (arguments.length > 1) {
      tmp7 = tmp(6347)(tmp3, arguments[1]);
    } else {
      tmp7 = tmp(6347)(tmp3);
    }
    return tmp7;
  } else {
    const self = this;
    const self2 = this;
    const tmp5 = new TypeError("non-iterable value provided");
    throw tmp5;
  }
};
