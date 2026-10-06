// Module ID: 13841
// Function ID: 13842
// Dependencies: [13839]

// Module 13841
import _mod13839 from "module_13839" /* 13839 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod13839(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
