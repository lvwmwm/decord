// Module ID: 13669
// Function ID: 13670
// Dependencies: [13670, 13683, 13631, 13652]

// Module 13669

export default (arg0, arg1, arg2) => {
  const arr = require(13670)(arg1);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp3 = arr[num];
    let tmp4 = require;
    let tmp5 = dependencyMap;
    let tmp6 = require(13652) /* call */(arg0, tmp3);
    let tmp7 = num;
    if (!tmp6) {
      let tmp8 = arg2;
      if (arg2) {
        tmp8 = tmp4(13652)(arg2, tmp3);
      }
      tmp6 = tmp8;
    }
    if (!tmp6) {
      let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
    }
  }
};
