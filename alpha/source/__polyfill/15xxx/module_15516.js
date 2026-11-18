// Module ID: 15516
// Function ID: 15517
// Dependencies: [15514]

// Module 15516
import _mod15514 from "module_15514" /* 15514 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod15514(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
