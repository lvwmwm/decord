// Module ID: 1316
// Function ID: 1317
// Name: sign
// Dependencies: [1317]

// Module 1316 (sign)
import _mod1317 from "module_1317" /* 1317 */;


export default function sign(arg0) {
  let tmp = arg0;
  if (!_mod1317(arg0)) {
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
