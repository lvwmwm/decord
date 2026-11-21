// Module ID: 15589
// Function ID: 15590
// Dependencies: [15587]

// Module 15589
import _mod15587 from "module_15587" /* 15587 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod15587(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
