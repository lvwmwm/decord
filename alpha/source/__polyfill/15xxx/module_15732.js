// Module ID: 15732
// Function ID: 15733
// Dependencies: [15730]

// Module 15732
import _mod15730 from "module_15730" /* 15730 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod15730(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
