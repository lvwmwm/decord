// Module ID: 15550
// Function ID: 15551
// Dependencies: [15548]

// Module 15550
import _mod15548 from "module_15548" /* 15548 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod15548(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
