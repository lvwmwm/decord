// Module ID: 16798
// Function ID: 16799
// Dependencies: [16796]

// Module 16798
import _mod16796 from "module_16796" /* 16796 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod16796(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
