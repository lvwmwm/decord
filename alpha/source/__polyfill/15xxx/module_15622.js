// Module ID: 15622
// Function ID: 15623
// Dependencies: [15574, 15581]

// Module 15622
import _mod15574 from "module_15574" /* 15574 */;
import _mod15581 from "module_15581" /* 15581 */;

let closure_2 = _mod15574("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod15581(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
