// Module ID: 14429
// Function ID: 14430
// Dependencies: [14427]

// Module 14429
import _mod14427 from "module_14427" /* 14427 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod14427(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
