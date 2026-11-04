// Module ID: 16179
// Function ID: 16180
// Dependencies: [16177]

// Module 16179
import _mod16177 from "module_16177" /* 16177 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod16177(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
