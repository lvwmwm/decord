// Module ID: 5093
// Function ID: 5094
// Name: iterateValue
// Dependencies: [5094, 5095]

// Module 5093 (iterateValue)
import _mod5094 from "module_5094" /* 5094 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod5094(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(5095)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(5095)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
