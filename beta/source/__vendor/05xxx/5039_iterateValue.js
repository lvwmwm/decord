// Module ID: 5039
// Function ID: 5040
// Name: iterateValue
// Dependencies: [5040, 5041]

// Module 5039 (iterateValue)
import _mod5040 from "module_5040" /* 5040 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod5040(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(5041)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(5041)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
