// Module ID: 14340
// Function ID: 14341
// Dependencies: [14303, 14332, 14323, 14328, 14324, 14327, 14334, 14331]

// Module 14340
import _mod14331 from "module_14331" /* 14331 */;

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
  const tmp3 = new require("module_14303")(arg0, arg3);
  let tmp4 = new require("module_14332")(arg1, arg3);
  if (">" === arg2) {
    dependencyMap = tmp(14323);
    tmpResult = tmp(14328);
    const tmpResult3 = tmp(14324);
    let closure_2 = tmpResult3;
    str3 = ">=";
    str = ">";
    tmpResult4 = tmpResult3;
  } else {
    str = "<";
    if ("<" === arg2) {
      dependencyMap = tmp(14324);
      tmpResult = tmp(14327);
      tmpResult4 = tmp(14323);
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
  if (tmp(14334)(tmp3, tmp4, arg3)) {
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
          if (semver.semver === _mod14331.ANY) {
            const self = this;
            const self2 = this;
            tmp = new _mod14331(">=0.0.0");
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
