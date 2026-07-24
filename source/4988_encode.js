// Module ID: 4988
// Function ID: 42986
// Name: encode
// Dependencies: [4989, 4990, 1497]

// Module 4988 (encode)
const require = arg1;
let dependencyMap = arg6;
function encode(arg0, encode) {
  if (!encode.encode) {
    return arg0;
  } else if (encode.strict) {
    let encodeURIComponentResult = require(4989)(arg0);
  } else {
    const _encodeURIComponent = encodeURIComponent;
    encodeURIComponentResult = encodeURIComponent(arg0);
  }
}
function keysSorter(arr) {
  let closure_0 = arr;
  if (Array.isArray(arr)) {
    let sorted = arr.sort();
  } else {
    sorted = arr;
    if ("object" === typeof arr) {
      const _Object = Object;
      const sorted1 = keysSorter(Object.keys(arr)).sort((arg0, arg1) => Number(arg0) - Number(arg1));
      sorted = sorted1.map((arg0) => arr[arg0]);
      const obj = keysSorter(Object.keys(arr));
    }
  }
  return sorted;
}
arg5.extract = (arg0) => arg0.split("?")[1] || "";
arg5.parse = (str) => {
  _require = (function parserForArrayFormat(arrayFormat) {
    arrayFormat = arrayFormat.arrayFormat;
    if ("index" === arrayFormat) {
      return (str) => {
        const table = /\[(\d*)\]$/.exec(str);
        const replaced = str.replace(/\[\d*\]$/, "");
        if (table) {
          if (undefined === arg2[replaced]) {
            arg2[replaced] = {};
          }
          arg2[replaced][table[1]] = arg1;
        } else {
          arg2[replaced] = arg1;
        }
      };
    } else {
      return "bracket" === arrayFormat ? ((str) => {
        let closure_0 = /(\[\])$/.exec(str);
        const replaced = str.replace(/\[\]$/, "");
        if (closure_0) {
          if (undefined !== arg2[replaced]) {
            const items = [];
            arg2[replaced] = items.concat(arg2[replaced], arg1);
          } else {
            const items1 = [arg1];
            arg2[replaced] = items1;
          }
        } else {
          arg2[replaced] = arg1;
        }
      }) : ((arg0, arg1, arg2) => {
        if (undefined !== arg2[arg0]) {
          const items = [];
          arg2[arg0] = items.concat(arg2[arg0], arg1);
        } else {
          arg2[arg0] = arg1;
        }
      });
    }
  })(_require(obj[1])({ arrayFormat: "none" }, arg1));
  obj = Object.create(null);
  let tmp2 = obj;
  if ("string" === typeof str) {
    const str4 = str.trim().replace(/^(\?|#|&)/, "");
    let reduced = obj;
    if (str4) {
      let parts = str4.split("&");
      const item = parts.forEach((str) => {
        const parts = str.replace(/\+/g, " ").split("=");
        let joined;
        str = str.replace(/\+/g, " ");
        if (parts.length > 0) {
          joined = parts.join("=");
        }
        let tmp3 = null;
        if (undefined !== joined) {
          tmp3 = callback(obj[2])(joined);
        }
        callback(callback(obj[2])(parts.shift()), tmp3, obj);
      });
      const _Object = Object;
      const keys = Object.keys(obj);
      const sorted = keys.sort();
      const _Object2 = Object;
      reduced = sorted.reduce((arg0, arg1) => {
        if (Boolean(obj[arg1])) {
          if ("object" === typeof tmp) {
            const _Array = Array;
            if (!Array.isArray(tmp)) {
              arg0[arg1] = outer1_3(tmp);
            }
            return arg0;
          }
        }
        arg0[arg1] = obj[arg1];
      }, Object.create(null));
    }
    tmp2 = reduced;
    const str2 = str.trim();
  }
  return tmp2;
};
arg5.stringify = (arg0, arg1) => {
  const _require = arg0;
  const tmp = _require(4990)({ encode: true, strict: true, arrayFormat: "none" }, arg1);
  const dependencyMap = tmp;
  let closure_2 = (function encoderForArrayFormat(arrayFormat) {
    let closure_0 = arrayFormat;
    arrayFormat = arrayFormat.arrayFormat;
    if ("index" === arrayFormat) {
      return (arg0, arg1, arg2) => {
        if (null === arg1) {
          const items = [callback(arg0, closure_0), "[", arg2, "]"];
          let joined = items.join("");
        } else {
          const items1 = [callback(arg0, closure_0), "[", callback(arg2, closure_0), "]=", callback(arg1, closure_0)];
          joined = items1.join("");
        }
        return joined;
      };
    } else {
      return "bracket" === arrayFormat ? ((arg0, arg1) => {
        if (null === arg1) {
          let joined = callback(arg0, closure_0);
        } else {
          const items = [callback(arg0, closure_0), "[]=", callback(arg1, closure_0)];
          joined = items.join("");
        }
        return joined;
      }) : ((arg0, arg1) => {
        if (null === arg1) {
          let joined = callback(arg0, closure_0);
        } else {
          const items = [callback(arg0, closure_0), "=", callback(arg1, closure_0)];
          joined = items.join("");
        }
        return joined;
      });
    }
  })(tmp);
  let str = "";
  if (arg0) {
    const _Object = Object;
    const keys = Object.keys(arg0);
    const sorted = keys.sort();
    const mapped = sorted.map((arg0) => {
      const table = arg0;
      if (undefined === table[arg0]) {
        return "";
      } else if (null === arr) {
        return callback(arg0, items);
      } else {
        const _Array = Array;
        if (Array.isArray(arr)) {
          items = [];
          const substr = arr.slice();
          const item = substr.forEach((arg0) => {
            if (undefined !== arg0) {
              items.push(outer1_2(closure_0, arg0, items.length));
            }
          });
          return items.join("&");
        } else {
          const text = `${closure_2(arg0, items)}=`;
          return `${closure_2(arg0, items)}=` + callback(arr, items);
        }
      }
    });
    const found = mapped.filter((arg0) => arg0.length > 0);
    str = found.join("&");
  }
  return str;
};
