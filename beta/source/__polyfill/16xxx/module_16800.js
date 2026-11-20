// Module ID: 16800
// Function ID: 16801
// Dependencies: [16798]

// Module 16800
import _mod16798 from "module_16798" /* 16798 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod16798(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
