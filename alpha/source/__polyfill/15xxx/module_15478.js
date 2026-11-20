// Module ID: 15478
// Function ID: 15479
// Dependencies: [15430, 15437]

// Module 15478
import _mod15430 from "module_15430" /* 15430 */;
import _mod15437 from "module_15437" /* 15437 */;

let closure_2 = _mod15430("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod15437(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
