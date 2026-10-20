// Module ID: 15415
// Function ID: 15416
// Dependencies: [15367, 15374]

// Module 15415
import _mod15367 from "module_15367" /* 15367 */;
import _mod15374 from "module_15374" /* 15374 */;

let closure_2 = _mod15367("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod15374(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
