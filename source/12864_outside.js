// Module ID: 12864
// Function ID: 99950
// Name: outside
// Dependencies: [12827, 12856, 12847, 12852, 12848, 12851, 12858, 12855]

// Module 12864 (outside)

export default function outside(arg0, arg1, arg2, arg3) {
  let closure_2 = arg3;
  let tmp = require(12827) /* SemVer */;
  tmp = new tmp(arg0, arg3);
  require = tmp;
  let tmp3 = require(12856) /* Range */;
  tmp3 = new tmp3(arg1, arg3);
  const dependencyMap = tmp3;
  if (">" === arg2) {
    let closure_3 = require(12847) /* gt */;
    let closure_4 = require(12852) /* lte */;
    let closure_5 = require(12848) /* lt */;
    let c6 = ">";
    let c7 = ">=";
  } else if ("<" === arg2) {
    closure_3 = require(12848) /* lt */;
    closure_4 = require(12851) /* gte */;
    closure_5 = require(12847) /* gt */;
    c6 = "<";
    c7 = "<=";
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Must provide a hilo val of \"<\" or \">\"");
    throw typeError;
  }
  if (require(12858) /* satisfies */(tmp, tmp3, arg3)) {
    return false;
  } else {
    let num7 = 0;
    num7 = 0;
    if (0 < tmp3.set.length) {
      const tmp14 = (function _loop() {
        let tmp3 = null;
        const item = tmp3.set[num7].forEach((semver) => {
          let tmp = semver;
          if (semver.semver === _null(_null2[7]).ANY) {
            const tmp4 = _null(_null2[7]);
            const prototype = tmp4.prototype;
            tmp = new tmp4(">=0.0.0");
          }
          let tmp7 = _null;
          if (!_null) {
            tmp7 = tmp;
          }
          _null = tmp7;
          let tmp8 = _null2;
          if (!_null2) {
            tmp8 = tmp;
          }
          _null2 = tmp8;
          if (outer1_3(tmp.semver, _null.semver, outer1_2)) {
            _null = tmp;
          } else if (outer1_5(tmp.semver, _null2.semver, outer1_2)) {
            _null2 = tmp;
          }
        });
        if (null.operator !== c6) {
          if (tmp.operator !== c7) {
            if (!tmp3.operator) {
              if (callback(tmp, tmp3.semver)) {
                let obj = { v: false };
              }
            } else {
              tmp3 = c6;
            }
            let tmp9;
            if (tmp3.operator === c7) {
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
      })();
      while (!tmp14) {
        num7 = num7 + 1;
      }
      return tmp14.v;
    }
    return true;
  }
};
