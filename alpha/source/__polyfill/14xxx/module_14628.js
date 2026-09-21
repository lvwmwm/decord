// Module ID: 14628
// Function ID: 14629
// Dependencies: [14626]

// Module 14628
import _mod14626 from "module_14626" /* 14626 */;


export default (arg0, arg1) => {
  const tmp = _mod14626(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
