// Module ID: 5284
// Function ID: 5285
// Name: iterateValue
// Dependencies: [5285, 5286]

// Module 5284 (iterateValue)
import _mod5285 from "module_5285" /* 5285 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod5285(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(5286)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(5286)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
