// Module ID: 5092
// Function ID: 5093
// Name: iterateValue
// Dependencies: [5093, 5094]

// Module 5092 (iterateValue)
import _mod5093 from "module_5093" /* 5093 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod5093(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(5094)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(5094)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
