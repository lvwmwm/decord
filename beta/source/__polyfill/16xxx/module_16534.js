// Module ID: 16534
// Function ID: 16535
// Dependencies: [16486, 16493]

// Module 16534
import _mod16486 from "module_16486" /* 16486 */;
import _mod16493 from "module_16493" /* 16493 */;

let closure_2 = _mod16486("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod16493(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
