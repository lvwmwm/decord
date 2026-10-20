// Module ID: 15421
// Function ID: 15422
// Dependencies: [15419]

// Module 15421
import _mod15419 from "module_15419" /* 15419 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod15419(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
