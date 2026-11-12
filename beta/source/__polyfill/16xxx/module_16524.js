// Module ID: 16524
// Function ID: 16525
// Dependencies: [16522]

// Module 16524
import _mod16522 from "module_16522" /* 16522 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod16522(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
