// Module ID: 16437
// Function ID: 16438
// Dependencies: [16435]

// Module 16437
import _mod16435 from "module_16435" /* 16435 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod16435(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
