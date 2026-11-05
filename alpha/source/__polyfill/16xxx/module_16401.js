// Module ID: 16401
// Function ID: 16402
// Dependencies: [16402]

// Module 16401
import _mod16402 from "module_16402" /* 16402 */;


export default (arg0, arg1) => {
  let tmp3 = _mod16402[arg0];
  if (!tmp3) {
    let obj = arg1;
    const tmpResult = _mod16402;
    if (!arg1) {
      obj = {};
    }
    tmpResult[arg0] = obj;
    tmp3 = obj;
  }
  return tmp3;
};
