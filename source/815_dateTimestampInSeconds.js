// Module ID: 815
// Function ID: 9126
// Name: dateTimestampInSeconds
// Dependencies: [808, 798]

// Module 815 (dateTimestampInSeconds)
const require = arg1;
const dependencyMap = arg6;
function dateTimestampInSeconds() {
  return require(808) /* withRandomSafeContext */.safeDateNow() / 1000;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c3 = null;
arg5.browserPerformanceTimeOrigin = function browserPerformanceTimeOrigin() {
  if (null === closure_3) {
    closure_3 = (function getBrowserTimeOrigin() {
      const _performance = outer1_0(outer1_1[1]).GLOBAL_OBJ.performance;
      if (null != _performance) {
        if (_performance.now) {
          const result = outer1_0(outer1_1[0]).withRandomSafeContext(() => _performance.now());
          const obj = outer1_0(outer1_1[0]);
          const safeDateNowResult = outer1_0(outer1_1[0]).safeDateNow();
          const timeOrigin = _performance.timeOrigin;
          if ("number" === typeof timeOrigin) {
            const _Math = Math;
            if (Math.abs(timeOrigin + result - safeDateNowResult) < 300000) {
              return timeOrigin;
            }
          }
          const timing = _performance.timing;
          let navigationStart;
          if (null != timing) {
            navigationStart = timing.navigationStart;
          }
          if ("number" !== typeof navigationStart) {
            navigationStart = safeDateNowResult - result;
          } else {
            const _Math2 = Math;
          }
          return navigationStart;
        }
      }
    })();
  }
  return closure_3;
};
arg5.dateTimestampInSeconds = dateTimestampInSeconds;
arg5.timestampInSeconds = function timestampInSeconds() {
  if (null != closure_2) {
    let tmp = closure_2;
  } else {
    tmp = (function createUnixTimestampInSecondsFunc() {
      const _performance = outer1_0(outer1_1[1]).GLOBAL_OBJ.performance;
      if (null != _performance) {
        if (_performance.now) {
          if (_performance.timeOrigin) {
            const timeOrigin = _performance.timeOrigin;
            return () => (timeOrigin + outer2_0(outer2_1[0]).withRandomSafeContext(() => outer1_0.now())) / 1000;
          }
        }
      }
      return outer1_4;
    })();
    closure_2 = tmp;
  }
  return tmp();
};
