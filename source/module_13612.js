// Module ID: 13612
// Function ID: 13613
// Dependencies: [13613, 13626, 13574, 13595]

// Module 13612

export default (arg0, arg1, arg2) => {
  const arr = require(13613)(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp4 = require;
    let tmp5 = dependencyMap;
    let tmp6 = require(13595) /* call */(arg0, tmp3);
    let tmp7 = num;
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = tmp4(13595)(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};
