// Module ID: 12862
// Function ID: 99944
// Name: minVersion
// Dependencies: [12856, 12827, 12847]

// Module 12862 (minVersion)

export default function minVersion(arg0, arg1) {
  let length;
  let tmp = require(12856) /* Range */;
  tmp = new tmp(arg0, arg1);
  require = tmp;
  let tmp2 = require(12827) /* SemVer */;
  tmp2 = new tmp2("0.0.0");
  let dependencyMap = tmp2;
  if (tmp.test(tmp2)) {
    return dependencyMap;
  } else {
    let tmp6 = require(12827) /* SemVer */;
    let prototype = tmp6.prototype;
    tmp6 = new tmp6("0.0.0-0");
    dependencyMap = tmp6;
    if (tmp.test(dependencyMap)) {
      return dependencyMap;
    } else {
      dependencyMap = null;
      let c2 = 0;
      let num = 0;
      if (0 < tmp.set.length) {
        do {
          let tmp13 = (function _loop() {
            const item = tmp.set[c2].forEach((semver) => {
              let tmp = _null(12827);
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
                let tmp3 = c0;
                if (c0) {
                  tmp3 = !_null(12847)(tmp, c0);
                }
                if (!tmp3) {
                  c0 = tmp;
                }
              }
            });
            let tmp2 = !tmp;
            if (!tmp2) {
              let tmp3 = closure_1;
              if (closure_1) {
                tmp3 = !tmp(_null[2])(closure_1, tmp);
              }
              tmp2 = tmp3;
            }
            if (!tmp2) {
              closure_1 = tmp;
            }
          })();
          num = num + 1;
          c2 = num;
          length = tmp.set.length;
        } while (num < length);
      }
      let tmp15 = null;
      if (dependencyMap) {
        tmp15 = null;
        if (tmp.test(dependencyMap)) {
          tmp15 = dependencyMap;
        }
      }
      return tmp15;
    }
  }
};
