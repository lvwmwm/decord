// Module ID: 13828
// Function ID: 13829
// Dependencies: [13829, 13842, 13790, 13811]

// Module 13828
import _mod13811 from "module_13811" /* 13811 */;
import _mod13829 from "module_13829" /* 13829 */;


export default (arg0, arg1, arg2) => {
  const arr = _mod13829(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp4 = require;
    let tmp6 = _mod13811(arg0, tmp3);
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = tmp4(13811)(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};
