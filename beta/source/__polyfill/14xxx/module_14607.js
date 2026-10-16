// Module ID: 14607
// Function ID: 14608
// Dependencies: [14605]

// Module 14607
import _mod14605 from "module_14605" /* 14605 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod14605(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
