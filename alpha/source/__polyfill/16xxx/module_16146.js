// Module ID: 16146
// Function ID: 16147
// Dependencies: [16098, 16105]

// Module 16146
import _mod16098 from "module_16098" /* 16098 */;
import _mod16105 from "module_16105" /* 16105 */;

let closure_2 = _mod16098("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod16105(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
