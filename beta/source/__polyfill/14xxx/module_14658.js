// Module ID: 14658
// Function ID: 14659
// Dependencies: [14659, 14672, 14620, 14641]

// Module 14658
import _mod14641 from "module_14641" /* 14641 */;
import _mod14659 from "module_14659" /* 14659 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod14659(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp4 = require;
    let tmp6 = _mod14641(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = tmp4(14641)(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};
