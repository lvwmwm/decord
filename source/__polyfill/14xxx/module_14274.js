// Module ID: 14274
// Function ID: 14275
// Dependencies: [14272]

// Module 14274
import _mod14272 from "module_14272" /* 14272 */;


export default (arg0, arg1) => {
  const tmp = _mod14272(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
