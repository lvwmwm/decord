// Module ID: 15493
// Function ID: 15494
// Dependencies: [15491]

// Module 15493
import _mod15491 from "module_15491" /* 15491 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod15491(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
