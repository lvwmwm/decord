// Module ID: 14620
// Function ID: 14621
// Dependencies: [14621, 14634, 14582, 14603]

// Module 14620
import _mod14603 from "module_14603" /* 14603 */;
import _mod14621 from "module_14621" /* 14621 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod14621(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp4 = require;
    let tmp6 = _mod14603(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = tmp4(14603)(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};
