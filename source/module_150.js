// Module ID: 150
// Function ID: 2380
// Dependencies: []

// Module 150
if (importDefault(dependencyMap[0])) {
  let importDefaultResult = importDefault(dependencyMap[1]);
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
