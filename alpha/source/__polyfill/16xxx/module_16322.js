// Module ID: 16322
// Function ID: 16323
// Dependencies: [16320]

// Module 16322
import _mod16320 from "module_16320" /* 16320 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod16320(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
