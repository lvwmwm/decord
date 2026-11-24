// Module ID: 15610
// Function ID: 15611
// Dependencies: [15608]

// Module 15610
import _mod15608 from "module_15608" /* 15608 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod15608(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
