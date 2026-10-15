// Module ID: 15257
// Function ID: 15258
// Dependencies: [15255]

// Module 15257
import _mod15255 from "module_15255" /* 15255 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod15255(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
