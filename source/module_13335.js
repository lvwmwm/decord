// Module ID: 13335
// Function ID: 102194
// Dependencies: [13336, 13349, 13297, 13318]

// Module 13335

export default (arg0, arg1, arg2) => {
  let num = 0;
  const arr = require(13336)(arg1);
  if (0 < arr.length) {
    do {
      let tmp3 = arr[num];
      let tmp4 = require;
      let tmp5 = dependencyMap;
      let tmp6 = require(13318) /* call */(arg0, tmp3);
      if (!tmp6) {
        let tmp7 = arg2;
        if (arg2) {
          let tmp8 = require;
          let tmp9 = dependencyMap;
          tmp7 = require(13318) /* call */(arg2, tmp3);
        }
        tmp6 = tmp7;
      }
      if (!tmp6) {
        let tmpResult = tmp(arg0, tmp3, tmp2(arg1, tmp3));
      }
      num = num + 1;
    } while (num < arr.length);
  }
};
