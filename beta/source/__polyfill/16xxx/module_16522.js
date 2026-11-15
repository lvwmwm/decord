// Module ID: 16522
// Function ID: 16523
// Dependencies: [16520]

// Module 16522
import _mod16520 from "module_16520" /* 16520 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod16520(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
