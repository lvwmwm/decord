// Module ID: 14648
// Function ID: 14649
// Dependencies: [14649, 14662, 14610, 14631]

// Module 14648
import _mod14631 from "module_14631" /* 14631 */;
import _mod14649 from "module_14649" /* 14649 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod14649(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp4 = require;
    let tmp6 = _mod14631(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = tmp4(14631)(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};
