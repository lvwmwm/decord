// Module ID: 5648
// Function ID: 5649
// Name: iterateValue
// Dependencies: [5649, 5650]

// Module 5648 (iterateValue)
import getIterator from "getIterator" /* 5649 */;


export default function iterateValue(arg0) {
  const tmp3 = getIterator(arg0);
  if (tmp3) {
    let tmp7;
    if (arguments.length > 1) {
      tmp7 = tmp(5650)(tmp3, arguments[1]);
    } else {
      tmp7 = tmp(5650)(tmp3);
    }
    return tmp7;
  } else {
    const self = this;
    const self2 = this;
    const tmp5 = new TypeError("non-iterable value provided");
    throw tmp5;
  }
};
