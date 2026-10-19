// Module ID: 15375
// Function ID: 15376
// Dependencies: [15373]

// Module 15375
import _mod15373 from "module_15373" /* 15373 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod15373(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
