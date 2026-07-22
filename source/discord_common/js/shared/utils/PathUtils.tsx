// Module ID: 484
// Function ID: 6292
// Name: getAuthenticationPath
// Dependencies: [513, 511, 513]
// Exports: getLoginPath, wrapPaths

// Module 484 (getAuthenticationPath)
import closure_0 from "items";
import module_511 from "module_511";
import items from "items";

function getAuthenticationPath(login, arg1, flag, arg3) {
  let tmp = arg1;
  let str = arg3;
  if (arg1 === undefined) {
    tmp = null;
  }
  if (flag === undefined) {
    flag = true;
  }
  if (str === undefined) {
    str = "";
  }
  let str2 = "";
  if (null != window.GLOBAL_ENV.WEBAPP_ENDPOINT) {
    const _window = window;
    str2 = window.GLOBAL_ENV.WEBAPP_ENDPOINT;
  }
  let str3 = "";
  if (null != tmp) {
    const _encodeURIComponent = encodeURIComponent;
    const _HermesInternal = HermesInternal;
    str3 = "?redirect_to=" + encodeURIComponent(tmp);
  }
  if (0 === str.length) {
    let str7 = "";
    if (flag) {
      str7 = str2;
    }
    const _HermesInternal4 = HermesInternal;
    return "" + str7 + "/" + login + str3 + tmp2;
  } else if (0 === str3.length) {
    const _HermesInternal3 = HermesInternal;
    let combined = "?" + str;
  } else {
    const _HermesInternal2 = HermesInternal;
    combined = "&" + str;
  }
}
const tmp2 = () => {
  class UnescapedPathParam {
    constructor(arg0) {
      tmp = UnescapedPathParam(this, UnescapedPathParam);
      this.value = arg0;
      return;
    }
  }
  let closure_0 = UnescapedPathParam;
  const items = [
    {
      key: "toString",
      value() {
        return this.value;
      }
    }
  ];
  return callback(UnescapedPathParam, items);
}();
const result = items.fileFinishedImporting("../discord_common/js/shared/utils/PathUtils.tsx");

export const getLoginPath = function getLoginPath(arg0, flag) {
  let str = arg2;
  if (flag === undefined) {
    flag = true;
  }
  if (str === undefined) {
    str = "";
  }
  return getAuthenticationPath("login", arg0, flag, str);
};
export { getAuthenticationPath };
export const UnescapedPathParam = tmp2;
export const wrapPaths = function wrapPaths(frozen, arg1) {
  let length;
  let closure_0 = frozen;
  let module_511 = arg1;
  const obj = {};
  function _loop() {
    const arg0 = tmp;
    if ("function" !== typeof arg0[closure_3]) {
      obj[closure_3] = tmp;
      return 1;
    } else {
      obj[closure_3] = (arg0) => tmp(...function encodePathArguments(arr, arg1) {
        return arr.map((arg0) => {
          if (null == arg0) {
            return arg0;
          } else if (arg0 instanceof closure_2) {
            let str = arg0.toString();
          } else if (null == arg1) {
            const _encodeURIComponent = encodeURIComponent;
            str = encodeURIComponent(arg0);
          } else {
            const _String = String;
            str = String(arg0);
            const parts = str.split("");
            const mapped = parts.map(() => { ... });
            str = mapped.join("");
          }
        });
      }(HermesBuiltin.copyRestArgs(), module_511));
    }
  }
  const keys = Object.keys(frozen);
  let num = 0;
  if (0 < keys.length) {
    do {
      closure_3 = keys[num];
      let _loopResult = _loop();
      num = num + 1;
      length = keys.length;
    } while (num < length);
  }
  return obj;
};
