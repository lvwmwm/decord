// Module ID: 13147
// Function ID: 99524
// Dependencies: []

// Module 13147

export default (arg0, arg1, arg2) => {
  let num = 0;
  const arr = require(dependencyMap[0])(arg1);
  if (0 < arr.length) {
    do {
      let tmp3 = arr[num];
      let tmp4 = closure_0;
      let tmp5 = closure_1;
      let tmp6 = closure_0(closure_1[3])(arg0, tmp3);
      if (!tmp6) {
        let tmp7 = arg2;
        if (arg2) {
          let tmp8 = closure_0;
          let tmp9 = closure_1;
          tmp7 = closure_0(closure_1[3])(arg2, tmp3);
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
