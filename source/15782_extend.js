// Module ID: 15782
// Function ID: 120752
// Name: extend
// Dependencies: []

// Module 15782 (extend)
arg5.extend = function extend(arg0) {
  const callResult = slice.call(arguments, 1);
  let num = 0;
  if (0 < callResult.length) {
    do {
      let tmp3 = callResult[num];
      let tmp4 = tmp2;
      if (tmp3) {
        let tmp5 = tmp3;
        let tmp6 = tmp2;
        tmp4 = tmp2;
        let keys = Object.keys();
        if (keys !== undefined) {
          tmp4 = tmp6;
          let tmp8 = keys[tmp];
          while (tmp8 !== undefined) {
            let tmp9 = tmp8;
            let tmp10 = closure_0;
            tmp6 = tmp8;
            if (!closure_0.call(tmp3, tmp8)) {
              continue;
            } else {
              arg0[tmp8] = tmp3[tmp8];
              tmp6 = tmp8;
              // continue
            }
            continue;
          }
        }
      }
      num = num + 1;
      let tmp2 = tmp4;
    } while (num < length);
  }
  return arg0;
};
arg5.hop = hasOwnProperty;
