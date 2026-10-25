// Module ID: 15560
// Function ID: 15561
// Dependencies: [15561]

// Module 15560
import _mod15561 from "module_15561" /* 15561 */;


export default (arg0, arg1) => {
  let tmp3 = _mod15561[arg0];
  if (!tmp3) {
    let obj = arg1;
    const tmpResult = _mod15561;
    if (!arg1) {
      obj = {};
    }
    tmpResult[arg0] = obj;
    tmp3 = obj;
  }
  return tmp3;
};
