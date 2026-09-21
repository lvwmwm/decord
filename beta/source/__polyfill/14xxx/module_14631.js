// Module ID: 14631
// Function ID: 14632
// Dependencies: [14629]

// Module 14631
import _mod14629 from "module_14629" /* 14629 */;


export default (arg0, arg1) => {
  const tmp = _mod14629(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
