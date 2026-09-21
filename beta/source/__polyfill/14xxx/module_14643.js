// Module ID: 14643
// Function ID: 14644
// Dependencies: [14595, 14602]

// Module 14643
import _mod14595 from "module_14595" /* 14595 */;
import _mod14602 from "module_14602" /* 14602 */;

let closure_2 = _mod14595("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod14602(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
