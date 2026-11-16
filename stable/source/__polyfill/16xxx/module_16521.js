// Module ID: 16521
// Function ID: 16522
// Dependencies: [16519]

// Module 16521
import _mod16519 from "module_16519" /* 16519 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod16519(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
