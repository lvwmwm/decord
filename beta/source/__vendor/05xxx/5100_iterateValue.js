// Module ID: 5100
// Function ID: 5101
// Name: iterateValue
// Dependencies: [5101, 5102]

// Module 5100 (iterateValue)
import _mod5101 from "module_5101" /* 5101 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod5101(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(5102)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(5102)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
