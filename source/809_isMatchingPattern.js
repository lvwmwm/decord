// Module ID: 809
// Function ID: 9067
// Name: isMatchingPattern
// Dependencies: []

// Module 809 (isMatchingPattern)
function isMatchingPattern(arr, test) {
  const tmp2 = !test(arg6[0]).isString(arr);
  if (tmp2) {
    return !tmp2;
  } else {
    if (obj2.isRegExp(test)) {
      let isMatch = test.test(arr);
    } else {
      const tmp7 = !test(arg6[0]).isString(test);
      isMatch = !tmp7;
      if (!tmp7) {
        if (tmp) {
          let hasItem = arr === test;
        } else {
          hasItem = arr.includes(test);
        }
      }
      const obj3 = test(arg6[0]);
    }
    const obj2 = test(arg6[0]);
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.isMatchingPattern = isMatchingPattern;
arg5.safeJoin = function safeJoin(arg0, arg1) {
  let arr = arg0;
  if (Array.isArray(arg0)) {
    const items = [];
    let num2 = 0;
    if (0 < arr.length) {
      while (true) {
        let tmp2 = arg0;
        let tmp3 = num2;
        let tmp4 = arr[num2];
        let tmp5 = arg1;
        let tmp6 = arg6;
        let obj = arg1(arg6[0]);
        let tmp7 = tmp4;
        let tmp8 = items;
        let push = items.push;
        if (obj.isVueViewModel(tmp4)) {
          let tmp11 = arg1;
          let tmp12 = arg6;
          let obj2 = arg1(arg6[1]);
          let tmp13 = tmp4;
          arr = push(obj2.getVueInternalName(tmp4));
        } else {
          let _String = String;
          let tmp9 = tmp4;
          arr = push(String(tmp4));
        }
        while (true) {
          let tmp15 = num2;
          let sum = num2 + 1;
          num2 = sum;
          let tmp17 = arg0;
          if (sum < arr.length) {
            break;
          } else {
            break label0;
          }
        }
      }
    }
    return items.join(arg1);
  } else {
    return "";
  }
};
arg5.snipLine = function snipLine(arr) {
  let tmp = arg1;
  if (arr.length <= 150) {
    return arr;
  } else {
    if (tmp > length) {
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
arg5.stringMatchesSomePattern = function stringMatchesSomePattern(arg0) {
  const arg1 = arg0;
  let closure_1 = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let items = arguments[1];
    }
    return items.some((arg0) => callback(arg0, arg0, closure_1));
  }
  items = [];
};
arg5.truncate = function truncate(arr) {
  let num = 0;
  if (arguments.length > 1) {
    num = 0;
    if (undefined !== arguments[1]) {
      num = arguments[1];
    }
  }
  let combined = arr;
  if ("string" === typeof arr) {
    combined = arr;
    if (0 !== num) {
      combined = arr;
      if (arr.length > num) {
        const _HermesInternal = HermesInternal;
        combined = "" + arr.slice(0, num) + "...";
      }
    }
  }
  return combined;
};
