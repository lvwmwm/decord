// Module ID: 150
// Function ID: 2380
// Name: NativePerformanceCxx
// Dependencies: [151, 152]

// Module 150 (NativePerformanceCxx)
if (require("NativePerformanceCxx")) {
  let importDefaultResult = require("Performance");
  const prototype = importDefaultResult.prototype;
  importDefaultResult = new importDefaultResult();
  global.performance = importDefaultResult;
} else if (!global.performance) {
  const obj = {
    mark() {

      },
    measure() {

      },
    now() {
        let now = global.nativePerformanceNow;
        if (!now) {
          const _Date = Date;
          now = Date.now;
        }
        return now();
      }
  };
  global.performance = obj;
}
