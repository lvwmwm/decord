// Module ID: 16485
// Function ID: 16486
// Dependencies: [16486]

// Module 16485
import _mod16486 from "module_16486" /* 16486 */;


export default (arg0, arg1) => {
  let tmp3 = _mod16486[arg0];
  if (!tmp3) {
    let obj = arg1;
    const tmpResult = _mod16486;
    if (!arg1) {
      obj = {};
    }
    tmpResult[arg0] = obj;
    tmp3 = obj;
  }
  return tmp3;
};
