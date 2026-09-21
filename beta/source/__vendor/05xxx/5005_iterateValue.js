// Module ID: 5005
// Function ID: 5006
// Name: iterateValue
// Dependencies: [5006, 5007]

// Module 5005 (iterateValue)
import _mod5006 from "module_5006" /* 5006 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod5006(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(5007)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(5007)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
