// Module ID: 16675
// Function ID: 16676
// Dependencies: [16673]

// Module 16675
import _mod16673 from "module_16673" /* 16673 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod16673(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
