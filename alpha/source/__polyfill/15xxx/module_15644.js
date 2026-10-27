// Module ID: 15644
// Function ID: 15645
// Dependencies: [15596, 15603]

// Module 15644
import _mod15596 from "module_15596" /* 15596 */;
import _mod15603 from "module_15603" /* 15603 */;

let closure_2 = _mod15596("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod15603(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
