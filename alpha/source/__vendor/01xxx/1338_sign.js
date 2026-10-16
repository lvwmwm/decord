// Module ID: 1338
// Function ID: 1339
// Name: sign
// Dependencies: [1339]

// Module 1338 (sign)
import _mod1339 from "module_1339" /* 1339 */;


export default function sign(arg0) {
  let tmp = arg0;
  if (!_mod1339(arg0)) {
    tmp = arg0;
    if (0 !== arg0) {
      let num2 = 1;
      if (arg0 < 0) {
        num2 = -1;
      }
      tmp = num2;
    }
  }
  return tmp;
};
