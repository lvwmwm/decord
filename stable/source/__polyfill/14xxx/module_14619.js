// Module ID: 14619
// Function ID: 14620
// Dependencies: [14571, 14578]

// Module 14619
import _mod14571 from "module_14571" /* 14571 */;
import _mod14578 from "module_14578" /* 14578 */;

let closure_2 = _mod14571("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod14578(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
