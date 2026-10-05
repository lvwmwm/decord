// Module ID: 14112
// Function ID: 14113
// Dependencies: [14110]

// Module 14112
import _mod14110 from "module_14110" /* 14110 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod14110(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
