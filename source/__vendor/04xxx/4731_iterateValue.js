// Module ID: 4731
// Function ID: 4732
// Name: iterateValue
// Dependencies: [4732, 4733]

// Module 4731 (iterateValue)
import getIterator from "getIterator" /* 4732 */;


export default function iterateValue(arg0) {
  const tmp3 = getIterator(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(4733)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(4733)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
