// Module ID: 13323
// Function ID: 102062
// Dependencies: [13324, 13337, 13285, 13306]

// Module 13323

export default (arg0, arg1, arg2) => {
  let num = 0;
  const arr = require(13324)(arg1);
  if (0 < arr.length) {
    do {
      let tmp3 = arr[num];
      let tmp4 = require;
      let tmp5 = dependencyMap;
      let tmp6 = require(13306) /* call */(arg0, tmp3);
      if (!tmp6) {
        let tmp7 = arg2;
        if (arg2) {
          let tmp8 = require;
          let tmp9 = dependencyMap;
          tmp7 = require(13306) /* call */(arg2, tmp3);
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
