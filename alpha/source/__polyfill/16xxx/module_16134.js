// Module ID: 16134
// Function ID: 16135
// Dependencies: [16132]

// Module 16134
import _mod16132 from "module_16132" /* 16132 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod16132(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
