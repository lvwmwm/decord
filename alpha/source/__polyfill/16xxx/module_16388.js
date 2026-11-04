// Module ID: 16388
// Function ID: 16389
// Dependencies: [16389]

// Module 16388
import _mod16389 from "module_16389" /* 16389 */;


export default (arg0, arg1) => {
  let tmp3 = _mod16389[arg0];
  if (!tmp3) {
    let obj = arg1;
    const tmpResult = _mod16389;
    if (!arg1) {
      obj = {};
    }
    tmpResult[arg0] = obj;
    tmp3 = obj;
  }
  return tmp3;
};
