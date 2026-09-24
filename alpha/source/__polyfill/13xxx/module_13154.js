// Module ID: 13154
// Function ID: 13155
// Dependencies: [13152]
// Exports: isMatchingPattern, safeJoin, snipLine, stringMatchesSomePattern, truncate

// Module 13154
import _mod13152 from "module_13152" /* 13152 */;

require = arg1;
const dependencyMap = arg6;

export const isMatchingPattern = function isMatchingPattern(arr, test) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const isStringResult = _mod13152.isString(arr);
  if (!isStringResult) {
    return isStringResult;
  } else {
    if (tmpResult.isRegExp(test)) {
      let isMatch = test.test(arr);
    } else {
      isMatch = tmp(13152).isString(test);
      if (isMatch) {
        if (flag) {
          let hasItem = arr === test;
        } else {
          hasItem = arr.includes(test);
        }
      }
      const tmpResult2 = tmp(13152);
    }
    tmpResult = tmp(13152);
  }
};
export const safeJoin = function safeJoin(arg0, arg1) {
  if (Array.isArray(arg0)) {
    const items = [];
    let num = 0;
    if (0 < arg0.length) {
      try {
        const push = items.push;
        if (obj.isVueViewModel(tmp2)) {
          push("[VueViewModel]");
        } else {
          const _String = String;
          push(String(tmp2));
        }
        num = num + 1;
        obj = _mod13152;
      } catch (err) {
        arr.push(tmp);
      }
    }
    return items.join(arg1);
  } else {
    return "";
  }
};
export const snipLine = function snipLine(arr, arg1) {
  if (arr.length <= 150) {
    return arr;
  } else {
    let tmp = arg1;
    if (arg1 > length) {
      tmp = length;
    }
    const _Math = Math;
    let num3 = Math.max(tmp - 60, 0);
    if (num3 < 5) {
      num3 = 0;
    }
    const _Math2 = Math;
    let bound = Math.min(num3 + 140, length);
    if (bound > length - 5) {
      bound = length;
    }
    if (bound === length) {
      const _Math3 = Math;
      num3 = Math.max(bound - 140, 0);
    }
    const substr = arr.slice(num3, bound);
    let combined = substr;
    if (num3 > 0) {
      const _HermesInternal = HermesInternal;
      combined = "'{snip} " + substr;
    }
    let text = combined;
    if (bound < length) {
      text = `${tmp6} {snip}`;
    }
    return text;
  }
};
export const stringMatchesSomePattern = function stringMatchesSomePattern(arg0) {
  closure_0 = arg0;
  let items = arg1;
  if (arg1 === undefined) {
    items = [];
  }
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  return items.some((test) => {
    if (flag === undefined) {
      flag = false;
    }
    const isStringResult = _mod13152.isString(closure_0);
    if (!isStringResult) {
      return isStringResult;
    } else {
      if (tmpResult.isRegExp(test)) {
        let isMatch = test.test(obj);
      } else {
        isMatch = tmp(13152).isString(test);
        if (isMatch) {
          if (flag) {
            let hasItem = obj === test;
          } else {
            hasItem = obj.includes(test);
          }
        }
        const tmpResult2 = tmp(13152);
      }
      tmpResult = tmp(13152);
    }
  });
};
export const truncate = function truncate(str) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  let combined = str;
  if (typeof str === "string") {
    combined = str;
    if (0 !== num) {
      combined = str;
      if (str.length > num) {
        const _HermesInternal = HermesInternal;
        combined = "" + str.slice(0, num) + "...";
      }
    }
  }
  return combined;
};
