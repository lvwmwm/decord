// Module ID: 14659
// Function ID: 14660
// Dependencies: [14657]

// Module 14659
import _mod14657 from "module_14657" /* 14657 */;


export default (arg0, arg1) => {
  const tmp = _mod14657(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
