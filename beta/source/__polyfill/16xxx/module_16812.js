// Module ID: 16812
// Function ID: 16813
// Dependencies: [16764, 16771]

// Module 16812
import _mod16764 from "module_16764" /* 16764 */;
import _mod16771 from "module_16771" /* 16771 */;

let closure_2 = _mod16764("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod16771(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
