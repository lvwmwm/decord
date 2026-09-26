// Module ID: 13829
// Function ID: 13830
// Dependencies: [13830, 13843, 13791, 13812]

// Module 13829
import _mod13812 from "module_13812" /* 13812 */;
import _mod13830 from "module_13830" /* 13830 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod13830(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp4 = require;
    let tmp6 = _mod13812(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = tmp4(13812)(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};
