// Module ID: 16058
// Function ID: 16059
// Dependencies: [16059]

// Module 16058
import _mod16059 from "module_16059" /* 16059 */;


export default (arg0, arg1) => {
  let tmp3 = _mod16059[arg0];
  if (!tmp3) {
    let obj = arg1;
    const tmpResult = _mod16059;
    if (!arg1) {
      obj = {};
    }
    tmpResult[arg0] = obj;
    tmp3 = obj;
  }
  return tmp3;
};
