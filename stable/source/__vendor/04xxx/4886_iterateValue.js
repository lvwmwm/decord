// Module ID: 4886
// Function ID: 4887
// Name: iterateValue
// Dependencies: [4887, 4888]

// Module 4886 (iterateValue)
import _mod4887 from "module_4887" /* 4887 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod4887(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(4888)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(4888)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
