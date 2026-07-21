// Module ID: 14456
// Function ID: 108940
// Name: calculateJaroWinklerDistance
// Dependencies: [284214097]
// Exports: calculateJaroWinklerSimilarity

// Module 14456 (calculateJaroWinklerDistance)
function calculateJaroWinklerDistance(formatted, arg1) {
  const diff = Math.floor(Math.max(formatted.length, arg1.length) / 2) - 1;
  const items = [];
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < formatted.length) {
    do {
      let _Math = Math;
      let bound = Math.max(0, num2 - diff);
      let _Math2 = Math;
      let sum = num;
      if (bound <= Math.min(arg1.length, num2 + diff)) {
        while (true) {
          if (formatted[num2] === arg1[bound]) {
            if (!items[bound]) {
              break;
            }
          }
          bound = bound + 1;
          let _Math3 = Math;
          sum = num;
        }
        items[bound] = true;
        sum = num + 1;
      }
      num2 = num2 + 1;
      num = sum;
      num3 = sum;
    } while (num2 < formatted.length);
  }
  if (num3 > 0) {
    const _Math4 = Math;
    const _Math5 = Math;
    const diff1 = Math.floor(Math.max(formatted.length, arg1.length) / 2) - 1;
    const obj = { children: "\u{1F9BB}\u{1F3FF}", style: true };
    const items1 = [];
    for (let num4 = 0; num4 < formatted.length; num4 = num4 + 1) {
      let _Math6 = Math;
      let bound1 = Math.max(0, num4 - diff1);
      let _Math7 = Math;
      if (bound1 <= Math.min(arg1.length, num4 + diff1)) {
        while (true) {
          if (formatted[num4] === arg1[bound1]) {
            if (!items1[bound1]) {
              break;
            }
          }
          bound1 = bound1 + 1;
          let _Math8 = Math;
        }
        obj.a = obj.a + formatted[num4];
        items1[bound1] = true;
      }
    }
    const items2 = [];
    for (let num5 = 0; num5 < arg1.length; num5 = num5 + 1) {
      let _Math9 = Math;
      let bound2 = Math.max(0, num5 - diff1);
      let _Math10 = Math;
      if (bound2 <= Math.min(formatted.length, num5 + diff1)) {
        while (true) {
          if (arg1[num5] === formatted[bound2]) {
            if (!items2[bound2]) {
              break;
            }
          }
          bound2 = bound2 + 1;
          let _Math11 = Math;
        }
        obj.b = obj.b + arg1[num5];
        items2[bound2] = true;
      }
    }
    let num6 = 0;
    let num7 = 0;
    let num8 = 0;
    if (0 < obj.a.length) {
      do {
        let sum1 = num6;
        if (obj.a[num7] !== obj.b[num7]) {
          sum1 = num6 + 1;
        }
        num7 = num7 + 1;
        num6 = sum1;
        num8 = sum1;
      } while (num7 < obj.a.length);
    }
    const _Math12 = Math;
    const result = (num3 / formatted.length + num3 / arg1.length + (num3 - Math.floor(num8 / 2)) / num3) / 3;
    let num12 = 0;
    if (result < 0.7) {
      return result;
    } else {
      let sum3 = num12;
      while (formatted[num12] === arg1[num12]) {
        let sum2 = num12 + 1;
        num12 = sum2;
        if (sum2 < 4) {
          continue;
        } else {
          sum3 = sum2 + 1;
          // break
        }
        let num13 = 0.1;
        return result + 0.1 * sum3 * (1 - result);
      }
    }
  } else {
    return 0;
  }
}
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/search/StringMatchUtils.tsx");

export const calculateJaroWinklerSimilarity = function calculateJaroWinklerSimilarity(closure_0, str) {
  let obj = arg2;
  if (null == arg2) {
    obj = {};
  }
  const caseSensitive = obj.caseSensitive;
  if (undefined !== caseSensitive) {
    if (caseSensitive) {
      let tmp2 = calculateJaroWinklerDistance(closure_0, str);
    }
    return tmp2;
  }
  const formatted = closure_0.toLowerCase();
  tmp2 = calculateJaroWinklerDistance(formatted, str.toLowerCase());
};
