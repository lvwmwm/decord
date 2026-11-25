// Module ID: 15597
// Function ID: 15598
// Dependencies: [15595]

// Module 15597
import _mod15595 from "module_15595" /* 15595 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod15595(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
