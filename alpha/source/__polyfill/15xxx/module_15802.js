// Module ID: 15802
// Function ID: 15803
// Dependencies: [15754, 15761]

// Module 15802
import _mod15754 from "module_15754" /* 15754 */;
import _mod15761 from "module_15761" /* 15761 */;

let closure_2 = _mod15754("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod15761(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
