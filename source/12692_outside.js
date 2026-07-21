// Module ID: 12692
// Function ID: 97440
// Name: outside
// Dependencies: []

// Module 12692 (outside)

export default function outside(arg0, arg1, arg2, arg3) {
  let tmp = require(dependencyMap[0]);
  tmp = new tmp(arg0, arg3);
  const require = tmp;
  let tmp3 = require(dependencyMap[1]);
  tmp3 = new tmp3(arg1, arg3);
  const dependencyMap = tmp3;
  if (">" === arg2) {
    let closure_3 = require(dependencyMap[2]);
    let closure_4 = require(dependencyMap[3]);
    let closure_5 = require(dependencyMap[4]);
    let closure_6 = ">";
    let closure_7 = ">=";
  } else if ("<" === arg2) {
    closure_3 = require(dependencyMap[4]);
    closure_4 = require(dependencyMap[5]);
    closure_5 = require(dependencyMap[2]);
    closure_6 = "<";
    closure_7 = "<=";
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Must provide a hilo val of \"<\" or \">\"");
    throw typeError;
  }
  if (require(dependencyMap[6])(tmp, tmp3, arg3)) {
    return false;
  } else {
    let num7 = 0;
    num7 = 0;
    if (0 < tmp3.set.length) {
      const tmp14 = function _loop() {
        let tmp3 = null;
        const item = tmp3.set[closure_8].forEach((semver) => {
          let tmp = semver;
          if (semver.semver === _null(semver[7]).ANY) {
            const tmp4 = _null(semver[7]);
            const prototype = tmp4.prototype;
            tmp = new tmp4(">=0.0.0");
          }
          let tmp7 = _null;
          if (!_null) {
            tmp7 = tmp;
          }
          let _null = tmp7;
          let tmp8 = semver;
          if (!semver) {
            tmp8 = tmp;
          }
          semver = tmp8;
          if (callback(tmp.semver, _null.semver, closure_2)) {
            _null = tmp;
          } else if (callback2(tmp.semver, semver.semver, closure_2)) {
            semver = tmp;
          }
        });
        if (null.operator !== closure_6) {
          if (tmp.operator !== closure_7) {
            if (!tmp3.operator) {
              if (callback(tmp, tmp3.semver)) {
                let obj = { v: false };
              }
            } else {
              tmp3 = closure_6;
            }
            let tmp9;
            if (tmp3.operator === closure_7) {
              if (callback2(tmp, tmp3.semver)) {
                obj = { v: false };
                tmp9 = obj;
              }
            }
            obj = tmp9;
          }
          return obj;
        }
        obj = { v: false };
      }();
      while (!tmp14) {
        num7 = num7 + 1;
      }
      return tmp14.v;
    }
    return true;
  }
};
