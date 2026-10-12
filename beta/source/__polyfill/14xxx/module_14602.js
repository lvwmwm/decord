// Module ID: 14602
// Function ID: 14603
// Dependencies: [14600]

// Module 14602
import _mod14600 from "module_14600" /* 14600 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod14600(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
