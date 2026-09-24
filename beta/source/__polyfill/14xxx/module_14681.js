// Module ID: 14681
// Function ID: 14682
// Dependencies: [14633, 14640]

// Module 14681
import _mod14633 from "module_14633" /* 14633 */;
import _mod14640 from "module_14640" /* 14640 */;

let closure_2 = _mod14633("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod14640(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
