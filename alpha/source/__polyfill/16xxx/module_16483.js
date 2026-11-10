// Module ID: 16483
// Function ID: 16484
// Dependencies: [16484]

// Module 16483
import _mod16484 from "module_16484" /* 16484 */;


export default (arg0, arg1) => {
  let tmp3 = _mod16484[arg0];
  if (!tmp3) {
    let obj = arg1;
    const tmpResult = _mod16484;
    if (!arg1) {
      obj = {};
    }
    tmpResult[arg0] = obj;
    tmp3 = obj;
  }
  return tmp3;
};
