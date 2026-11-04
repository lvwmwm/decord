// Module ID: 15642
// Function ID: 15643
// Dependencies: [15594, 15601]

// Module 15642
import _mod15594 from "module_15594" /* 15594 */;
import _mod15601 from "module_15601" /* 15601 */;

let closure_2 = _mod15594("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod15601(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
