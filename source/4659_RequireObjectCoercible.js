// Module ID: 4659
// Function ID: 4660
// Name: RequireObjectCoercible
// Dependencies: [541]

// Module 4659 (RequireObjectCoercible)
import _mod541 from "module_541" /* 541 */;


export default function RequireObjectCoercible(arg0) {
  if (null == arg0) {
    let text = arguments.length > 0;
    let tmp3 = _mod541;
    if (text) {
      text = arguments[1];
    }
    if (!text) {
      text = `Cannot call method on ${arg0}`;
    }
    tmp3 = new tmp3(text);
    throw tmp3;
  } else {
    return arg0;
  }
};
