// Module ID: 16492
// Function ID: 16493
// Dependencies: [16490]

// Module 16492
import _mod16490 from "module_16490" /* 16490 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod16490(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
