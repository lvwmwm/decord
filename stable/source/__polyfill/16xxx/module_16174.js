// Module ID: 16174
// Function ID: 16175
// Dependencies: [16172]

// Module 16174
import _mod16172 from "module_16172" /* 16172 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod16172(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
