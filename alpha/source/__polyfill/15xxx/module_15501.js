// Module ID: 15501
// Function ID: 15502
// Dependencies: [15502]

// Module 15501
import _mod15502 from "module_15502" /* 15502 */;


export default (arg0, arg1) => {
  let tmp3 = _mod15502[arg0];
  if (!tmp3) {
    let obj = arg1;
    const tmpResult = _mod15502;
    if (!arg1) {
      obj = {};
    }
    tmpResult[arg0] = obj;
    tmp3 = obj;
  }
  return tmp3;
};
