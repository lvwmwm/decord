// Module ID: 13270
// Function ID: 101735
// Dependencies: [13271, 13284, 13232, 13253]

// Module 13270

export default (arg0, arg1, arg2) => {
  let num = 0;
  const arr = require(13271)(arg1);
  if (0 < arr.length) {
    do {
      let tmp3 = arr[num];
      let tmp4 = require;
      let tmp5 = dependencyMap;
      let tmp6 = require(13253) /* call */(arg0, tmp3);
      if (!tmp6) {
        let tmp7 = arg2;
        if (arg2) {
          let tmp8 = require;
          let tmp9 = dependencyMap;
          tmp7 = require(13253) /* call */(arg2, tmp3);
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
