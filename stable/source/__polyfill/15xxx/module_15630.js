// Module ID: 15630
// Function ID: 15631
// Dependencies: [15628]

// Module 15630
import _mod15628 from "module_15628" /* 15628 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod15628(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
