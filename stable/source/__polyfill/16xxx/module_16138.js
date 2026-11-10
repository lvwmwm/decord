// Module ID: 16138
// Function ID: 16139
// Dependencies: [16139]

// Module 16138
import _mod16139 from "module_16139" /* 16139 */;


export default (arg0, arg1) => {
  let tmp3 = _mod16139[arg0];
  if (!tmp3) {
    let obj = arg1;
    const tmpResult = _mod16139;
    if (!arg1) {
      obj = {};
    }
    tmpResult[arg0] = obj;
    tmp3 = obj;
  }
  return tmp3;
};
