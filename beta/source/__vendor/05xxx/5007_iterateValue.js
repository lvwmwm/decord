// Module ID: 5007
// Function ID: 5008
// Name: iterateValue
// Dependencies: [5008, 5009]

// Module 5007 (iterateValue)
import _mod5008 from "module_5008" /* 5008 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod5008(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(5009)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(5009)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
