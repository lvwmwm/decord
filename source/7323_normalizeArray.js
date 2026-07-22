// Module ID: 7323
// Function ID: 59050
// Name: normalizeArray
// Dependencies: []

// Module 7323 (normalizeArray)
function normalizeArray(arr) {
  let tmp10;
  let diff = arr.length - 1;
  let num = 0;
  let num2 = 0;
  if (diff >= 0) {
    do {
      let tmp2 = arr[diff];
      if ("." === tmp2) {
        let spliceResult = arr.splice(diff, 1);
        let sum = num;
      } else if (".." === tmp2) {
        let spliceResult1 = arr.splice(diff, 1);
        sum = num + 1;
      } else {
        sum = num;
        if (num) {
          let spliceResult2 = arr.splice(diff, 1);
          sum = num - 1;
        }
      }
      diff = diff - 1;
      num = sum;
      num2 = sum;
    } while (diff >= 0);
  }
  if (arg1) {
    let diff1 = tmp7 - 1;
    if (+num2) {
      do {
        arr = arr.unshift("..");
        tmp10 = +diff1;
        diff1 = tmp10 - 1;
      } while (tmp10);
    }
  }
  return arr;
}
function splitPath(arr) {
  let combined = arr;
  if (arr.length > 1024) {
    const _HermesInternal = HermesInternal;
    combined = "<truncated>" + arr.slice(-1024);
  }
  const match = regex.exec(combined);
  if (match) {
    let substr = match.slice(1);
  } else {
    substr = [];
  }
  return substr;
}
function resolve() {
  let diff = arguments.length - 1;
  let str = "";
  let flag = false;
  let str2 = "";
  let str3 = "";
  let flag2 = false;
  if (diff >= -1) {
    while (true) {
      let str4 = "/";
      if (diff >= 0) {
        let tmp2;
        if (diff >= 0) {
          if (arguments.length > diff) {
            tmp2 = arguments[diff];
          }
        }
        str4 = tmp2;
      }
      let combined = str2;
      if (str4) {
        let _HermesInternal = HermesInternal;
        combined = str + str4 + "/" + str2;
        flag = "/" === str4.charAt(0);
      }
      diff = diff - 1;
      let tmp4 = flag;
      str3 = combined;
      flag2 = flag;
      if (diff < -1) {
        break;
      } else {
        str2 = combined;
        str3 = combined;
        flag2 = flag;
        if (flag) {
          break;
        }
      }
    }
  }
  if (flag2) {
    str = "/";
  }
  const parts = str3.split("/");
  const found = parts.filter((arg0) => arg0);
  normalizeArray(found, !flag2);
  return str + found.join("/") || ".";
}
function trim(arr) {
  let num = 0;
  if (0 < arr.length) {
    let num2 = 0;
    num = 0;
    if ("" === arr[0]) {
      const sum = num2 + 1;
      num = sum;
      while (sum < arr.length) {
        num2 = sum;
        num = sum;
        if ("" !== arr[sum]) {
          break;
        }
      }
    }
  }
  const diff = arr.length - 1;
  let tmp3 = diff;
  if (diff >= 0) {
    let tmp4 = diff;
    tmp3 = diff;
    if ("" === arr[diff]) {
      const diff1 = tmp4 - 1;
      tmp3 = diff1;
      while (diff1 >= 0) {
        tmp4 = diff1;
        tmp3 = diff1;
        if ("" !== arr[diff1]) {
          break;
        }
      }
    }
  }
  if (num > tmp3) {
    let items = [];
  } else {
    items = arr.slice(num, tmp3 - num + 1);
  }
  return items;
}
function normalizePath(arr) {
  const tmp = isAbsolute(arr);
  const parts = arr.split("/");
  const found = parts.filter((arg0) => arg0);
  normalizeArray(found, !tmp);
  let str = found.join("/");
  let tmp4 = str;
  if (!str) {
    tmp4 = tmp;
  }
  if (!tmp4) {
    str = ".";
  }
  let tmp5 = str;
  if (str) {
    tmp5 = tmp2;
  }
  let text = str;
  if (tmp5) {
    text = `${str}/`;
  }
  let str2 = "";
  if (tmp) {
    str2 = "/";
  }
  return str2 + text;
}
function isAbsolute(str) {
  return "/" === str.charAt(0);
}
let closure_0 = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
arg5.basename = function basename(arg0, arg1) {
  const arr = splitPath(arg0)[2] || "";
  let tmp = arg1;
  if (arg1) {
    tmp = arr.slice(-1 * arg1.length) === arg1;
  }
  let substr = arr;
  if (tmp) {
    substr = arr.slice(0, arr.length - arg1.length);
  }
  return substr;
};
arg5.dirname = function dirname(arg0) {
  const tmp = splitPath(arg0);
  if (tmp[0] || "") {
    let substr = arr;
    if (arr) {
      substr = arr.slice(0, arr.length - 1);
    }
    let str = tmp2 + substr;
  } else {
    str = ".";
  }
  return str;
};
arg5.isAbsolute = isAbsolute;
arg5.join = function join() {
  const length = arguments.length;
  const array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arguments[num];
  }
  return normalizePath(array.join("/"));
};
arg5.normalizePath = normalizePath;
arg5.relative = function relative(arg0, arg1) {
  let length;
  let arr = resolve(arg0);
  const str = arr.slice(1);
  const arr2 = resolve(arg1);
  const arr3 = trim(str.split("/"));
  const arr4 = trim(resolve(arg1).slice(1).split("/"));
  const bound = Math.min(arr3.length, arr4.length);
  let num = 0;
  let tmp2 = bound;
  if (0 < bound) {
    tmp2 = num;
    while (arr3[num] === arr4[num]) {
      num = num + 1;
      tmp2 = bound;
      if (num >= bound) {
        break;
      }
    }
  }
  const items = [];
  let sum = tmp2;
  if (tmp2 < arr3.length) {
    do {
      arr = items.push("..");
      sum = sum + 1;
      length = arr3.length;
    } while (sum < length);
  }
  const combined = items.concat(arr4.slice(tmp2));
  return combined.join("/");
};
arg5.resolve = resolve;
