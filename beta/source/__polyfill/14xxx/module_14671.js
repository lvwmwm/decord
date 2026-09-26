// Module ID: 14671
// Function ID: 14672
// Dependencies: [14623, 14630]

// Module 14671
import _mod14623 from "module_14623" /* 14623 */;
import _mod14630 from "module_14630" /* 14630 */;

let closure_2 = _mod14623("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod14630(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
