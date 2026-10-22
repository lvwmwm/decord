// Module ID: 15537
// Function ID: 15538
// Dependencies: [15535]

// Module 15537
import _mod15535 from "module_15535" /* 15535 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod15535(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
