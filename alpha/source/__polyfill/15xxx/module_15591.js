// Module ID: 15591
// Function ID: 15592
// Dependencies: [15589]

// Module 15591
import _mod15589 from "module_15589" /* 15589 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod15589(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
