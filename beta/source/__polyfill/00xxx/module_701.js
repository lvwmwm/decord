// Module ID: 701
// Function ID: 702
// Dependencies: [696, 702]
// Exports: isMatchingPattern, safeJoin, snipLine, stringMatchesSomePattern, truncate

// Module 701
import _mod696 from "module_696" /* 696 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const isMatchingPattern = function isMatchingPattern(arr, test) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const isStringResult = _mod696.isString(arr);
  if (!isStringResult) {
    return isStringResult;
  } else {
    if (tmpResult.isRegExp(test)) {
      let isMatch = test.test(arr);
    } else {
      isMatch = tmp(696).isString(test);
      if (isMatch) {
        if (flag) {
          let hasItem = arr === test;
        } else {
          hasItem = arr.includes(test);
        }
      }
      const tmpResult2 = tmp(696);
    }
    tmpResult = tmp(696);
  }
};
export const safeJoin = function safeJoin(__v_isVNode, arg1) {
  if (Array.isArray(__v_isVNode)) {
    const items = [];
    let num = 0;
    if (0 < __v_isVNode.length) {
      try {
        const push = items.push;
        if (obj.isVueViewModel(tmp2)) {
          push(tmp4(702).getVueInternalName(tmp2));
          const tmp4Result = tmp4(702);
        } else {
          const _String = String;
          push(String(tmp2));
        }
        num = num + 1;
        obj = _mod696;
        tmp4 = require;
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
    const isStringResult = _mod696.isString(closure_0);
    if (!isStringResult) {
      return isStringResult;
    } else {
      if (tmpResult.isRegExp(test)) {
        let isMatch = test.test(obj);
      } else {
        isMatch = tmp(696).isString(test);
        if (isMatch) {
          if (flag) {
            let hasItem = obj === test;
          } else {
            hasItem = obj.includes(test);
          }
        }
        const tmpResult2 = tmp(696);
      }
      tmpResult = tmp(696);
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
