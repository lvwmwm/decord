// Module ID: 5006
// Function ID: 5007
// Name: iterateValue
// Dependencies: [5007, 5008]

// Module 5006 (iterateValue)
import _mod5007 from "module_5007" /* 5007 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod5007(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(5008)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(5008)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
