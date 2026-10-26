// Module ID: 15596
// Function ID: 15597
// Dependencies: [15594]

// Module 15596
import _mod15594 from "module_15594" /* 15594 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod15594(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
