// Module ID: 15502
// Function ID: 15503
// Dependencies: [15500]

// Module 15502
import _mod15500 from "module_15500" /* 15500 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod15500(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
