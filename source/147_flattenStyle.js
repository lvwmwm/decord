// Module ID: 147
// Function ID: 2357
// Name: flattenStyle
// Dependencies: []

// Module 147 (flattenStyle)
function flattenStyle(arg0) {
  if (null !== arg0) {
    if ("object" === typeof arg0) {
      const _Array = Array;
      if (Array.isArray(arg0)) {
        const obj = {};
        for (let num = 0; num < length; num = num + 1) {
          let tmp2 = flattenStyle;
          let tmp3 = flattenStyle(arg0[num]);
          if (tmp3) {
            let tmp4 = tmp3;
            for (const key10019 in tmp3) {
              let tmp5 = key10019;
              obj[key10019] = tmp3[key10019];
              continue;
            }
          }
        }
        return obj;
      } else {
        return arg0;
      }
    }
  }
}
arg5.default = flattenStyle;
