// Module ID: 1911
// Function ID: 1912
// Name: extend
// Dependencies: []
// Exports: extend

// Module 1911 (extend)

export const extend = function extend(arg0) {
  let num;
  const callResult = slice.call(arguments, 1);
  const length = callResult.length;
  for (let num = 0; num < length; num = num + 1) {
    let tmp = callResult[num];
    if (tmp) {
      for (const key10018 in tmp) {
        if (!hasOwnProperty.call(tmp, key10018)) {
          continue;
        } else {
          arg0[key10018] = tmp[key10018];
          continue;
        }
        continue;
      }
    }
  }
  return arg0;
};
export const hop = hasOwnProperty;
