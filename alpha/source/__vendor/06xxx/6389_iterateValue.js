// Module ID: 6389
// Function ID: 6390
// Name: iterateValue
// Dependencies: [6390, 6391]

// Module 6389 (iterateValue)
import getIterator from "getIterator" /* 6390 */;


export default function iterateValue(arg0) {
  const tmp3 = getIterator(arg0);
  if (tmp3) {
    let tmp7;
    if (arguments.length > 1) {
      tmp7 = tmp(6391)(tmp3, arguments[1]);
    } else {
      tmp7 = tmp(6391)(tmp3);
    }
    return tmp7;
  } else {
    const self = this;
    const self2 = this;
    const tmp5 = new TypeError("non-iterable value provided");
    throw tmp5;
  }
};
