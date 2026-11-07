// Module ID: 16482
// Function ID: 16483
// Dependencies: [16480]

// Module 16482
import _mod16480 from "module_16480" /* 16480 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod16480(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
