// Module ID: 4651
// Function ID: 4652
// Name: iterateValue
// Dependencies: [4652, 4653]

// Module 4651 (iterateValue)
import getIterator from "getIterator" /* 4652 */;


export default function iterateValue(arg0) {
  const tmp3 = getIterator(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(4653)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(4653)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
