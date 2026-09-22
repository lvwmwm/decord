// Module ID: 1311
// Function ID: 1312
// Name: sign
// Dependencies: [1312]

// Module 1311 (sign)
import _mod1312 from "module_1312" /* 1312 */;


export default function sign(arg0) {
  let tmp = arg0;
  if (!_mod1312(arg0)) {
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
