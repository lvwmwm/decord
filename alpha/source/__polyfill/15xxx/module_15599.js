// Module ID: 15599
// Function ID: 15600
// Dependencies: [15551, 15558]

// Module 15599
import _mod15551 from "module_15551" /* 15551 */;
import _mod15558 from "module_15558" /* 15558 */;

let closure_2 = _mod15551("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod15558(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
