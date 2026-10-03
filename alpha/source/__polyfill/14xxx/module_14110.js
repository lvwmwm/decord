// Module ID: 14110
// Function ID: 14111
// Dependencies: [14108]

// Module 14110
import _mod14108 from "module_14108" /* 14108 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod14108(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
