// Module ID: 1336
// Function ID: 1337
// Name: sign
// Dependencies: [1337]

// Module 1336 (sign)
import _mod1337 from "module_1337" /* 1337 */;


export default function sign(arg0) {
  let tmp = arg0;
  if (!_mod1337(arg0)) {
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
