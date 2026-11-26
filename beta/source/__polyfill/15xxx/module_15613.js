// Module ID: 15613
// Function ID: 15614
// Dependencies: [15565, 15572]

// Module 15613
import _mod15565 from "module_15565" /* 15565 */;
import _mod15572 from "module_15572" /* 15572 */;

let closure_2 = _mod15565("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod15572(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
