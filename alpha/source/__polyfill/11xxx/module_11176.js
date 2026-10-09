// Module ID: 11176
// Function ID: 11177
// Dependencies: [11174]
// Exports: isMatchingPattern, safeJoin, snipLine, stringMatchesSomePattern, truncate

// Module 11176
import _mod11174 from "module_11174" /* 11174 */;


export const isMatchingPattern = function isMatchingPattern(arr, test) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const obj = _mod11174;
  let isStringResult = obj.isString(arr);
  if (isStringResult) {
    let isMatch;
    const tmpResult = _mod11174;
    if (tmpResult.isRegExp(test)) {
      isMatch = test.test(arr);
    } else {
      const tmpResult2 = _mod11174;
      isMatch = tmpResult2.isString(test);
      if (isMatch) {
        let hasItem;
        if (flag) {
          hasItem = arr === test;
        } else {
          hasItem = arr.includes(test);
        }
        isMatch = hasItem;
      }
    }
    isStringResult = isMatch;
  }
  return isStringResult;
};
export const safeJoin = function safeJoin(arg0, arg1) {
  if (Array.isArray(arg0)) {
    const items = [];
    let num = 0;
    if (0 < arg0.length) {
      try {
        const push = items.push;
        const obj = _mod11174;
        if (obj.isVueViewModel(arg0[num])) {
          push("[VueViewModel]");
        } else {
          const _String = String;
          push(String(arg0[num]));
        }
      } catch (err) {
        items.push("[value cannot be serialized]");
      }
      num = num + 1;
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
    if (arg1 > arr.length) {
      tmp = length;
    }
    const _Math = Math;
    let num3 = Math.max(tmp - 60, 0);
    if (num3 < 5) {
      num3 = 0;
    }
    const _Math2 = Math;
    let bound = Math.min(num3 + 140, length);
    if (bound > arr.length - 5) {
      bound = length;
    }
    if (bound === arr.length) {
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
    if (bound < arr.length) {
      text = `${tmp6} {snip}`;
    }
    return text;
  }
};
export const stringMatchesSomePattern = function stringMatchesSomePattern(arg0) {
  let closure_0 = arg0;
  let items = arg1;
  if (arg1 === undefined) {
    items = [];
  }
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  return items.some((test) => {
    const obj2 = _mod11174;
    let isStringResult = obj2.isString(obj);
    if (isStringResult) {
      let isMatch;
      const tmpResult = _mod11174;
      if (tmpResult.isRegExp(test)) {
        isMatch = test.test(obj);
      } else {
        const tmpResult2 = _mod11174;
        isMatch = tmpResult2.isString(test);
        if (isMatch) {
          let hasItem;
          if (flag) {
            hasItem = obj === test;
          } else {
            hasItem = obj.includes(test);
          }
          isMatch = hasItem;
        }
      }
      isStringResult = isMatch;
    }
    return isStringResult;
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
