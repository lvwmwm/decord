// Module ID: 16434
// Function ID: 16435
// Dependencies: [16432]

// Module 16434
import _mod16432 from "module_16432" /* 16432 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod16432(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
