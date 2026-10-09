// Module ID: 14525
// Function ID: 14526
// Dependencies: [14523]

// Module 14525
import _mod14523 from "module_14523" /* 14523 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod14523(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
