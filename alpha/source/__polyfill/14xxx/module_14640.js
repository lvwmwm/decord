// Module ID: 14640
// Function ID: 14641
// Dependencies: [14592, 14599]

// Module 14640
import _mod14592 from "module_14592" /* 14592 */;
import _mod14599 from "module_14599" /* 14599 */;

let closure_2 = _mod14592("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod14599(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
