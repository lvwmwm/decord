// Module ID: 13853
// Function ID: 13854
// Dependencies: [13805, 13812]

// Module 13853
import _mod13805 from "module_13805" /* 13805 */;
import _mod13812 from "module_13812" /* 13812 */;

let closure_2 = _mod13805("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod13812(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
