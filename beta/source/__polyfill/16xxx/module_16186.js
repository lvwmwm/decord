// Module ID: 16186
// Function ID: 16187
// Dependencies: [16138, 16145]

// Module 16186
import _mod16138 from "module_16138" /* 16138 */;
import _mod16145 from "module_16145" /* 16145 */;

let closure_2 = _mod16138("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod16145(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
