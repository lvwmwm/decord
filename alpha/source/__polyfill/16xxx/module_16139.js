// Module ID: 16139
// Function ID: 16140
// Dependencies: [16140]

// Module 16139
import _mod16140 from "module_16140" /* 16140 */;


export default (arg0, arg1) => {
  let tmp3 = _mod16140[arg0];
  if (!tmp3) {
    let obj = arg1;
    const tmpResult = _mod16140;
    if (!arg1) {
      obj = {};
    }
    tmpResult[arg0] = obj;
    tmp3 = obj;
  }
  return tmp3;
};
