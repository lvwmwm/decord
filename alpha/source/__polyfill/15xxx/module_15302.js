// Module ID: 15302
// Function ID: 15303
// Dependencies: [15300]

// Module 15302
import _mod15300 from "module_15300" /* 15300 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod15300(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
