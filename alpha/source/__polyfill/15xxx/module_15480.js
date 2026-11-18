// Module ID: 15480
// Function ID: 15481
// Dependencies: [15481]

// Module 15480
import _mod15481 from "module_15481" /* 15481 */;


export default (arg0, arg1) => {
  let tmp3 = _mod15481[arg0];
  if (!tmp3) {
    let obj = arg1;
    const tmpResult = _mod15481;
    if (!arg1) {
      obj = {};
    }
    tmpResult[arg0] = obj;
    tmp3 = obj;
  }
  return tmp3;
};
