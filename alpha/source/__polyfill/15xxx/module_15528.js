// Module ID: 15528
// Function ID: 15529
// Dependencies: [15480, 15487]

// Module 15528
import _mod15480 from "module_15480" /* 15480 */;
import _mod15487 from "module_15487" /* 15487 */;

let closure_2 = _mod15480("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod15487(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
