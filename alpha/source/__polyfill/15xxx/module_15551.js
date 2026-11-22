// Module ID: 15551
// Function ID: 15552
// Dependencies: [15552]

// Module 15551
import _mod15552 from "module_15552" /* 15552 */;


export default (arg0, arg1) => {
  let tmp3 = _mod15552[arg0];
  if (!tmp3) {
    let obj = arg1;
    const tmpResult = _mod15552;
    if (!arg1) {
      obj = {};
    }
    tmpResult[arg0] = obj;
    tmp3 = obj;
  }
  return tmp3;
};
