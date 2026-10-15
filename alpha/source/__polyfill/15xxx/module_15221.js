// Module ID: 15221
// Function ID: 15222
// Dependencies: [15222]

// Module 15221
import _mod15222 from "module_15222" /* 15222 */;


export default (arg0, arg1) => {
  let tmp3 = _mod15222[arg0];
  if (!tmp3) {
    let obj = arg1;
    const tmpResult = _mod15222;
    if (!arg1) {
      obj = {};
    }
    tmpResult[arg0] = obj;
    tmp3 = obj;
  }
  return tmp3;
};
