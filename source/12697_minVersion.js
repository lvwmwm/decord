// Module ID: 12697
// Function ID: 97467
// Name: minVersion
// Dependencies: []

// Module 12697 (minVersion)

export default function minVersion(arg0, arg1) {
  let length;
  let tmp = require(closure_1[0]);
  tmp = new tmp(arg0, arg1);
  const require = tmp;
  let tmp2 = require(closure_1[1]);
  tmp2 = new tmp2("0.0.0");
  closure_1 = tmp2;
  if (tmp.test(tmp2)) {
    return closure_1;
  } else {
    let tmp6 = require(closure_1[1]);
    const prototype = tmp6.prototype;
    tmp6 = new tmp6("0.0.0-0");
    closure_1 = tmp6;
    if (tmp.test(closure_1)) {
      return closure_1;
    } else {
      closure_1 = null;
      let closure_2 = 0;
      let num = 0;
      if (0 < tmp.set.length) {
        do {
          let tmp13 = function _loop() {
            const item = tmp.set[closure_2].forEach((semver) => {
              let tmp = _null(closure_1[1]);
              tmp = new tmp(semver.semver.version);
              const operator = semver.operator;
              if (">" === operator) {
                if (0 === tmp.prerelease.length) {
                  tmp.patch = tmp.patch + 1;
                } else {
                  const prerelease = tmp.prerelease;
                  prerelease.push(0);
                }
                tmp.raw = tmp.format();
              } else {
                if ("" !== operator) {
                  if (">=" !== operator) {
                    if ("<" !== operator) {
                      if ("<=" !== operator) {
                        const _Error = Error;
                        const _HermesInternal = HermesInternal;
                        const error = new Error("Unexpected operation: " + semver.operator);
                        throw error;
                      }
                    }
                  }
                }
                let tmp3 = _null;
                if (_null) {
                  tmp3 = !_null(closure_1[2])(tmp, _null);
                }
                if (!tmp3) {
                  const _null = tmp;
                }
              }
            });
            let tmp2 = !tmp;
            if (!tmp2) {
              let tmp3 = closure_1;
              if (closure_1) {
                tmp3 = !tmp(closure_1[2])(closure_1, tmp);
              }
              tmp2 = tmp3;
            }
            if (!tmp2) {
              closure_1 = tmp;
            }
          }();
          num = num + 1;
          closure_2 = num;
          length = tmp.set.length;
        } while (num < length);
      }
      let tmp15 = null;
      if (closure_1) {
        tmp15 = null;
        if (tmp.test(closure_1)) {
          tmp15 = closure_1;
        }
      }
      return tmp15;
    }
  }
};
