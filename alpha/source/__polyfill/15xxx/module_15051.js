// Module ID: 15051
// Function ID: 15052
// Dependencies: [15014, 15043, 15034, 15039, 15035, 15038, 15045, 15042]

// Module 15051
import _mod15042 from "module_15042" /* 15042 */;

const require = globalThis.__r;
let _require, closure_1, dependencyMap;


export default function(arg0, arg1, arg2, arg3) {
  let closure_0;
  let obj;
  let str;
  let str3;
  let tmpResult;
  let tmpResult4;
  _require = arg3;
  let tmp = _require;
  let tmp2 = dependencyMap;
  const tmp3 = new require("module_15014")(arg0, arg3);
  let tmp4 = new require("module_15043")(arg1, arg3);
  if (">" === arg2) {
    dependencyMap = tmp(15034);
    tmpResult = tmp(15039);
    const tmpResult3 = tmp(15035);
    let closure_2 = tmpResult3;
    str3 = ">=";
    str = ">";
    tmpResult4 = tmpResult3;
  } else {
    str = "<";
    if ("<" === arg2) {
      dependencyMap = tmp(15035);
      tmpResult = tmp(15038);
      tmpResult4 = tmp(15034);
      closure_2 = tmpResult4;
      str3 = "<=";
    } else {
      const _TypeError = TypeError;
      let self = this;
      let self2 = this;
      const typeError = new TypeError("Must provide a hilo val of \"<\" or \">\"");
      throw typeError;
    }
  }
  if (tmp(15045)(tmp3, tmp4, arg3)) {
    return false;
  } else {
    let num = 0;
    let num3 = 0;
    if (0 < tmp4.set.length) {
      while (true) {
        let arr = tmp4.set[num3];
        _require = null;
        dependencyMap = null;
        let item = arr.forEach(function(semver) {
          let tmp = semver;
          if (semver.semver === _mod15042.ANY) {
            const self = this;
            const self2 = this;
            tmp = new _mod15042(">=0.0.0");
          }
          semver = semver || tmp;
          closure_1 = closure_1 || tmp;
          const tmp4 = semver;
          if (closure_1(tmp.semver, semver.semver, semver)) {
            semver = tmp;
          } else if (closure_2(tmp.semver, closure_1.semver, tmp4)) {
            closure_1 = tmp;
          }
        });
        if (_require.operator !== str) {
          if (_require.operator !== str3) {
            if (!dependencyMap.operator) {
              if (tmpResult(tmp3, dependencyMap.semver)) {
                obj = { v: false };
              }
            }
            let obj2;
            if (dependencyMap.operator === str3) {
              if (tmpResult4(tmp3, dependencyMap.semver)) {
                obj2 = { v: false };
              }
            }
            obj = obj2;
          }
          if (obj) {
            break;
          } else {
            num3 = num + 1;
            num = num3;
          }
        }
        obj = { v: false };
      }
      return obj.v;
    }
    return true;
  }
};
