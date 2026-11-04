// Module ID: 16411
// Function ID: 16412
// Dependencies: [16409]

// Module 16411
import _mod16409 from "module_16409" /* 16409 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod16409(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
