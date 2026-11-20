// Module ID: 15466
// Function ID: 15467
// Dependencies: [15464]

// Module 15466
import _mod15464 from "module_15464" /* 15464 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod15464(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
