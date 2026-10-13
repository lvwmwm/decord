// Module ID: 14923
// Function ID: 14924
// Dependencies: [14921]

// Module 14923
import _mod14921 from "module_14921" /* 14921 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod14921(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
