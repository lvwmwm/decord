// Module ID: 15514
// Function ID: 15515
// Dependencies: [15466, 15473]

// Module 15514
import _mod15466 from "module_15466" /* 15466 */;
import _mod15473 from "module_15473" /* 15473 */;

let closure_2 = _mod15466("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod15473(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
