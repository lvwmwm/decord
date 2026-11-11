// Module ID: 16680
// Function ID: 16681
// Dependencies: [16678]

// Module 16680
import _mod16678 from "module_16678" /* 16678 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod16678(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
