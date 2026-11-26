// Module ID: 15795
// Function ID: 15796
// Dependencies: [15747, 15754]

// Module 15795
import _mod15747 from "module_15747" /* 15747 */;
import _mod15754 from "module_15754" /* 15754 */;

let closure_2 = _mod15747("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod15754(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
