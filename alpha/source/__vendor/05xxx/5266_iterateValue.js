// Module ID: 5266
// Function ID: 5267
// Name: iterateValue
// Dependencies: [5267, 5268]

// Module 5266 (iterateValue)
import _mod5267 from "module_5267" /* 5267 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod5267(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(5268)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(5268)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
