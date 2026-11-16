// Module ID: 16533
// Function ID: 16534
// Dependencies: [16485, 16492]

// Module 16533
import _mod16485 from "module_16485" /* 16485 */;
import _mod16492 from "module_16492" /* 16492 */;

let closure_2 = _mod16485("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod16492(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
