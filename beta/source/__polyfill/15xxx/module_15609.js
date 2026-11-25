// Module ID: 15609
// Function ID: 15610
// Dependencies: [15561, 15568]

// Module 15609
import _mod15561 from "module_15561" /* 15561 */;
import _mod15568 from "module_15568" /* 15568 */;

let closure_2 = _mod15561("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod15568(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
