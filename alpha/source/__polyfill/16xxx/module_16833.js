// Module ID: 16833
// Function ID: 16834
// Dependencies: [16831]

// Module 16833
import _mod16831 from "module_16831" /* 16831 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod16831(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
