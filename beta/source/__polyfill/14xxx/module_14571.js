// Module ID: 14571
// Function ID: 14572
// Dependencies: [14572]

// Module 14571
import _mod14572 from "module_14572" /* 14572 */;


export default (arg0, arg1) => {
  let tmp3 = _mod14572[arg0];
  if (!tmp3) {
    let obj = arg1;
    const tmpResult = _mod14572;
    if (!arg1) {
      obj = {};
    }
    tmpResult[arg0] = obj;
    tmp3 = obj;
  }
  return tmp3;
};
