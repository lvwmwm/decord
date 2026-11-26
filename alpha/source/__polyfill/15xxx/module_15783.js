// Module ID: 15783
// Function ID: 15784
// Dependencies: [15781]

// Module 15783
import _mod15781 from "module_15781" /* 15781 */;


export default (arg0, arg1) => {
  let tmp3;
  const tmp = _mod15781(arg0);
  if (tmp < 0) {
    tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
