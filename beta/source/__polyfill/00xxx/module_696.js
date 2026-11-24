// Module ID: 696
// Function ID: 697
// Dependencies: [691, 697]
// Exports: isMatchingPattern, safeJoin, snipLine, stringMatchesSomePattern, truncate

// Module 696
import _mod691 from "module_691" /* 691 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function isMatchingPattern(description, name) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const obj = _mod691;
  let isStringResult = obj.isString(description);
  if (isStringResult) {
    let isMatch;
    const tmpResult = _mod691;
    if (tmpResult.isRegExp(name)) {
      isMatch = name.test(description);
    } else {
      const tmpResult2 = _mod691;
      isMatch = tmpResult2.isString(name);
      if (isMatch) {
        let hasItem;
        if (flag) {
          hasItem = description === name;
        } else {
          hasItem = description.includes(name);
        }
        isMatch = hasItem;
      }
    }
    isStringResult = isMatch;
  }
  return isStringResult;
}
export function safeJoin(args, arg1) {
  if (Array.isArray(args)) {
    const items = [];
    let num = 0;
    if (0 < args.length) {
      try {
        const push = items.push;
        const obj = _mod691;
        const tmp3 = require;
        if (obj.isVueViewModel(args[num])) {
          const tmp3Result = tmp3(697);
          push(tmp3Result.getVueInternalName(args[num]));
        } else {
          const _String = String;
          push(String(args[num]));
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
}
export function snipLine(arr, lineno) {
  if (arr.length <= 150) {
    return arr;
  } else {
    let tmp = lineno;
    if (lineno > arr.length) {
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
}
export function stringMatchesSomePattern(name, endpoints) {
  let closure_0 = name;
  let items = endpoints;
  if (endpoints === undefined) {
    items = [];
  }
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  return items.some((test) => {
    const obj2 = _mod691;
    let isStringResult = obj2.isString(obj);
    if (isStringResult) {
      let isMatch;
      const tmpResult = _mod691;
      if (tmpResult.isRegExp(test)) {
        isMatch = test.test(obj);
      } else {
        const tmpResult2 = _mod691;
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
}
export function truncate(str) {
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
}
