// Module ID: 4764
// Function ID: 4765
// Name: iterateValue
// Dependencies: [4765, 4766]

// Module 4764 (iterateValue)
import getIterator from "getIterator" /* 4765 */;


export default function iterateValue(arg0) {
  const tmp3 = getIterator(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(4766)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(4766)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
