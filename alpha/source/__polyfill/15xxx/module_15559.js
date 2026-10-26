// Module ID: 15559
// Function ID: 15560
// Dependencies: [15560]

// Module 15559
import _mod15560 from "module_15560" /* 15560 */;


export default (arg0, arg1) => {
  let tmp3 = _mod15560[arg0];
  if (!tmp3) {
    let obj = arg1;
    const tmpResult = _mod15560;
    if (!arg1) {
      obj = {};
    }
    tmpResult[arg0] = obj;
    tmp3 = obj;
  }
  return tmp3;
};
