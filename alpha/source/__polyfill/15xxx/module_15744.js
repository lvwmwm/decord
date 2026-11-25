// Module ID: 15744
// Function ID: 15745
// Dependencies: [15696, 15703]

// Module 15744
import _mod15696 from "module_15696" /* 15696 */;
import _mod15703 from "module_15703" /* 15703 */;

let closure_2 = _mod15696("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod15703(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
