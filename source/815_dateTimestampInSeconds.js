// Module ID: 815
// Function ID: 9124
// Name: dateTimestampInSeconds
// Dependencies: []

// Module 815 (dateTimestampInSeconds)
function dateTimestampInSeconds() {
  return arg1(arg6[0]).safeDateNow() / 1000;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let closure_3 = null;
arg5.browserPerformanceTimeOrigin = function browserPerformanceTimeOrigin() {
  if (null === closure_3) {
    closure_3 = function getBrowserTimeOrigin() {
      const _performance = _performance(closure_1[1]).GLOBAL_OBJ.performance;
      if (null != _performance) {
        if (_performance.now) {
          const result = _performance(closure_1[0]).withRandomSafeContext(() => _performance.now());
          const obj = _performance(closure_1[0]);
          const safeDateNowResult = _performance(closure_1[0]).safeDateNow();
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
    }();
  }
  return closure_3;
};
arg5.dateTimestampInSeconds = dateTimestampInSeconds;
arg5.timestampInSeconds = function timestampInSeconds() {
  if (null == tmp) {
    const tmp = function createUnixTimestampInSecondsFunc() {
      const _performance = _performance(timeOrigin[1]).GLOBAL_OBJ.performance;
      if (null != _performance) {
        if (_performance.now) {
          if (_performance.timeOrigin) {
            const timeOrigin = _performance.timeOrigin;
            return () => (timeOrigin + _performance(timeOrigin[0]).withRandomSafeContext(() => closure_0.now())) / 1000;
          }
        }
      }
      return closure_4;
    }();
  }
  return tmp();
};
