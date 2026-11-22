// Module ID: 15587
// Function ID: 15588
// Dependencies: [15585]

// Module 15587
import _mod15585 from "module_15585" /* 15585 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod15585(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
