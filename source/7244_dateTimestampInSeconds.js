// Module ID: 7244
// Function ID: 58338
// Name: dateTimestampInSeconds
// Dependencies: []

// Module 7244 (dateTimestampInSeconds)
function dateTimestampInSeconds() {
  return Date.now() / 1000;
}
const _performance = require(dependencyMap[0]).GLOBAL_OBJ.performance;
if (_performance) {
  if (_performance.now) {
    const nowResult = _performance.now();
    const _Date = Date;
    const timestamp = Date.now();
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
    const tmp5 = num2 < 3600000;
  }
}

export const _browserPerformanceTimeOriginMode = "none";
export { dateTimestampInSeconds };
export const timestampInSeconds = function createUnixTimestampInSecondsFunc() {
  const _performance = require(dependencyMap[0]).GLOBAL_OBJ.performance;
  const require = _performance;
  if (_performance) {
    if (_performance.now) {
      const _Date = Date;
      const timestamp = Date.now();
      let timeOrigin = timestamp - _performance.now();
      if (null != _performance.timeOrigin) {
        timeOrigin = _performance.timeOrigin;
      }
      const dependencyMap = timeOrigin;
      return () => (timeOrigin + _performance.now()) / 1000;
    }
  }
  return dateTimestampInSeconds;
}();
