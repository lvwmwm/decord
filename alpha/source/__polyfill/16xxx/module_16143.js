// Module ID: 16143
// Function ID: 16144
// Dependencies: [16144]

// Module 16143
import _mod16144 from "module_16144" /* 16144 */;


export default (arg0, arg1) => {
  let tmp3 = _mod16144[arg0];
  if (!tmp3) {
    let obj = arg1;
    const tmpResult = _mod16144;
    if (!arg1) {
      obj = {};
    }
    tmpResult[arg0] = obj;
    tmp3 = obj;
  }
  return tmp3;
};
