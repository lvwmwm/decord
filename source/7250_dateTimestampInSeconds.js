// Module ID: 7250
// Function ID: 58424
// Name: dateTimestampInSeconds
// Dependencies: [7237]

// Module 7250 (dateTimestampInSeconds)
function dateTimestampInSeconds() {
  return Date.now() / 1000;
}
let _performance = require("getGlobalSingleton").GLOBAL_OBJ.performance;
if (_performance) {
  if (_performance.now) {
    const nowResult = _performance.now();
    let _Date = Date;
    let timestamp = Date.now();
    let num2 = 3600000;
    if (_performance.timeOrigin) {
      const _Math = Math;
      num2 = Math.abs(_performance.timeOrigin + nowResult - timestamp);
    }
    let timeOrigin = _performance.timing;
    if (timeOrigin) {
      timeOrigin = _performance.timing.navigationStart;
    }
    let num3 = 3600000;
    if ("number" === typeof timeOrigin) {
      const _Math2 = Math;
      num3 = Math.abs(timeOrigin + nowResult - timestamp);
    }
    if (!tmp5) {
      if (num3 >= 3600000) {
        exports._browserPerformanceTimeOriginMode = "dateNow";
      }
    }
    if (num2 <= num3) {
      exports._browserPerformanceTimeOriginMode = "timeOrigin";
      timeOrigin = _performance.timeOrigin;
    } else {
      exports._browserPerformanceTimeOriginMode = "navigationStart";
    }
    tmp5 = num2 < 3600000;
  }
}

export const _browserPerformanceTimeOriginMode = "none";
export { dateTimestampInSeconds };
export const timestampInSeconds = (function createUnixTimestampInSecondsFunc() {
  _performance = _performance(timeOrigin[0]).GLOBAL_OBJ.performance;
  if (_performance) {
    if (_performance.now) {
      const _Date = Date;
      const timestamp = Date.now();
      timeOrigin = timestamp - _performance.now();
      if (null != _performance.timeOrigin) {
        timeOrigin = _performance.timeOrigin;
      }
      return () => (timeOrigin + _performance.now()) / 1000;
    }
  }
  return dateTimestampInSeconds;
})();
