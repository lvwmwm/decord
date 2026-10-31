// Module ID: 16175
// Function ID: 16176
// Dependencies: [16173]

// Module 16175
import _mod16173 from "module_16173" /* 16173 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod16173(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
