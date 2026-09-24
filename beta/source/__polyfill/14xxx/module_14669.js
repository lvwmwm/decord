// Module ID: 14669
// Function ID: 14670
// Dependencies: [14667]

// Module 14669
import _mod14667 from "module_14667" /* 14667 */;


export default (arg0, arg1) => {
  const tmp = _mod14667(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
