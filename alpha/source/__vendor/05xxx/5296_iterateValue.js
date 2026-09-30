// Module ID: 5296
// Function ID: 5297
// Name: iterateValue
// Dependencies: [5297, 5298]

// Module 5296 (iterateValue)
import _mod5297 from "module_5297" /* 5297 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod5297(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(5298)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(5298)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
