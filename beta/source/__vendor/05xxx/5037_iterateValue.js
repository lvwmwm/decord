// Module ID: 5037
// Function ID: 5038
// Name: iterateValue
// Dependencies: [5038, 5039]

// Module 5037 (iterateValue)
import _mod5038 from "module_5038" /* 5038 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod5038(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(5039)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(5039)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
