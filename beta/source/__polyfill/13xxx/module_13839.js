// Module ID: 13839
// Function ID: 13840
// Dependencies: [13837]

// Module 13839
import _mod13837 from "module_13837" /* 13837 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod13837(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
