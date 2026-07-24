// Module ID: 4232
// Function ID: 37112
// Name: classNames
// Dependencies: []

// Module 4232 (classNames)
const dependencyMap = arg4;
(() => {
  function classNames() {
    let num = 0;
    let str = "";
    let str2 = "";
    if (0 < arguments.length) {
      do {
        let tmp = arguments[num];
        let tmp2 = str;
        if (tmp) {
          let tmp3 = appendClass;
          let tmp4 = parseValue;
          tmp2 = appendClass(``, parseValue(tmp));
        }
        num = num + 1;
        str = tmp2;
        str2 = tmp2;
      } while (num < arguments.length);
    }
    return str2;
  }
  function parseValue(arg0) {
    if ("string" !== typeof arg0) {
      if ("number" !== tmp2) {
        if ("object" !== tmp2) {
          return "";
        } else {
          const _Array = Array;
          if (Array.isArray(arg0)) {
            return classNames.apply(null, arg0);
          } else {
            const _Object = Object;
            if (arg0.toString !== Object.prototype.toString) {
              let str = arg0.toString;
              str = str.toString();
              if (!str.includes("[native code]")) {
                return arg0.toString();
              }
            }
            let str3 = "";
            let str4 = "";
            const keys = Object.keys();
            if (keys !== undefined) {
              str4 = str3;
              while (keys[tmp] !== undefined) {
                let tmp12 = tmp6;
                let tmp13 = hasOwnProperty;
                let tmp7 = hasOwnProperty.call(arg0, tmp6) && arg0[tmp6];
                if (!tmp7) {
                  continue;
                } else {
                  let tmp8 = appendClass;
                  str3 = appendClass(tmp5, tmp6);
                  continue;
                }
                continue;
              }
            }
            return str4;
          }
        }
      }
    }
    return arg0;
  }
  function appendClass(arg0, arg1) {
    if (!arg1) {
      return arg0;
    } else if (arg0) {
      let text = `${arg0} ${arg1}`;
    } else {
      text = arg0 + arg1;
    }
  }
  const hasOwnProperty = {}.hasOwnProperty;
  if (undefined !== hasOwnProperty) {
    if (hasOwnProperty.exports) {
      classNames.default = classNames;
      hasOwnProperty.exports = classNames;
    }
  }
  if ("function" === typeof globalThis.define) {
    if ("object" === typeof globalThis.define.amd) {
      if (globalThis.define.amd) {
        globalThis.define("classnames", [], () => classNames);
      }
    }
  }
  window.classNames = classNames;
})();
