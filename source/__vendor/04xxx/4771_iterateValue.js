// Module ID: 4771
// Function ID: 4772
// Name: iterateValue
// Dependencies: [4772, 4773]

// Module 4771 (iterateValue)
import getIterator from "getIterator" /* 4772 */;


export default function iterateValue(arg0) {
  const tmp3 = getIterator(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(4773)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(4773)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
