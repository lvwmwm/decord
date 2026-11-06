// Module ID: 9966
// Function ID: 9967
// Name: _asyncToGenerator
// Dependencies: [5]
// Exports: profileFetch

// Module 9966 (_asyncToGenerator)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let _HermesInternal, closure_4, closure_6, closure_8, result, value2;

let value = function _profileFetch() {
  const obj = _asyncToGenerator(async (arg0, profilePath) => {
    let closure_0 = arg0;
    let c9 = 0;
    let c10 = 0;
    let c7 = 0;
    return (async (arg0, value) => {
      let tmp7;
      if (c10 === 2) {
        c10 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let closure_3;
          let _HermesInternal2;
          c10 = 2;
          if (0 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              return { value, done: true };
            } else {
              closure_6 = tmp7;
              profilePath = undefined;
              result = undefined;
              closure_3 = undefined;
              _HermesInternal2 = _HermesInternal.HermesInternal;
              let prop;
              if (_HermesInternal2 != null) {
                prop = _HermesInternal2.enableSamplingProfiler;
              }
              if (typeof prop === "function") {
                if (typeof _HermesInternal2.disableSamplingProfiler === "function") {
                  if (typeof _HermesInternal2.dumpSamplingProfiler === "function") {
                    result = tmp48;
                    if (profilePath == null) {
                      const _Date = Date;
                      _HermesInternal = HermesInternal;
                      result = "/tmp/nitrofetch-profile-" + Date.now() + ".cpuprofile";
                    }
                    closure_3 = result;
                    result = _HermesInternal2.enableSamplingProfiler();
                    c7 = 1;
                    c9 = 4;
                    c10 = 1;
                    const obj4 = { value: closure_0(), done: false };
                    return obj4;
                  }
                }
              }
              value2 = {};
              c9 = 1;
              c10 = 1;
              const obj5 = { value: closure_0(), done: false };
              return obj5;
            }
          } else if (1 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              return { value, done: true };
            } else {
              value2.result = value;
              c10 = 3;
              return { value: value2, done: true };
            }
          } else {
            if (2 === c9) {
              closure_4 = closure_8;
              const result1 = _HermesInternal2.disableSamplingProfiler();
              tmp7 = _HermesInternal2;
              _HermesInternal2.dumpSamplingProfiler(closure_3);
              profilePath = closure_3;
              c7 = 0;
            } else if (3 === c9) {
              c7 = 0;
            } else {
              if (4 === c9) {
                if (arg0 === 1) {
                  c10 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  const result2 = _HermesInternal2.disableSamplingProfiler();
                  tmp7 = _HermesInternal2;
                  _HermesInternal2.dumpSamplingProfiler(closure_3);
                  profilePath = closure_3;
                  c7 = 0;
                } else {
                  result = value;
                  const result3 = _HermesInternal2.disableSamplingProfiler();
                  tmp7 = _HermesInternal2;
                  _HermesInternal2.dumpSamplingProfiler(closure_3);
                  profilePath = closure_3;
                  c7 = 0;
                  const tmp5 = profilePath;
                  if (tmp5) {
                    tmp7 = result;
                    value = { result, profilePath };
                    const obj8 = { result, profilePath };
                  } else {
                    value = { result };
                  }
                  c10 = 3;
                  return { value, done: true };
                }
              } else if (5 === c9) {
                c7 = 0;
              } else {
                c7 = 0;
              }
              c10 = 3;
              return { value, done: true };
            }
            throw closure_4;
          }
        } catch (tmp32) {
          closure_8 = tmp32;
          if (0 === c7) {
            c10 = 3;
            throw tmp32;
          } else if (1 === c7) {
            c9 = 2;
          } else if (2 === c7) {
            c9 = 3;
          } else if (3 === c7) {
            c9 = 5;
          } else {
            c9 = 6;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};

export function profileFetch(arg0, arg1) {
  return obj(...arguments);
}
