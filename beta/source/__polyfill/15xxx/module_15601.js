// Module ID: 15601
// Function ID: 15602
// Dependencies: [15599]

// Module 15601
import _mod15599 from "module_15599" /* 15599 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod15599(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
