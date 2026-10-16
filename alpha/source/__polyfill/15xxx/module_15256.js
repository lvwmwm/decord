// Module ID: 15256
// Function ID: 15257
// Dependencies: [15257]

// Module 15256
import _mod15257 from "module_15257" /* 15257 */;


export default (arg0, arg1) => {
  let tmp3 = _mod15257[arg0];
  if (!tmp3) {
    let obj = arg1;
    const tmpResult = _mod15257;
    if (!arg1) {
      obj = {};
    }
    tmpResult[arg0] = obj;
    tmp3 = obj;
  }
  return tmp3;
};
