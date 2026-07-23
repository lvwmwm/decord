// Module ID: 1013
// Function ID: 11045
// Name: items
// Dependencies: [1014, 1016, 1020, 1018, 1022, 1023]

// Module 1013 (items)
const require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const items = [1800, 3000];
arg5.FCPThresholds = items;
arg5.onFCP = function onFCP(arg0) {
  const _require = arg0;
  if (arguments.length > 1) {
    const dependencyMap = {};
    _require(1014).whenActivated(() => {
      reportAllChanges = callback(reportAllChanges[1]).getVisibilityWatcher();
      let obj = callback(reportAllChanges[1]);
      const metric = callback(reportAllChanges[2]).initMetric("FCP");
      const obj2 = callback(reportAllChanges[2]);
      const observeResult = callback(reportAllChanges[4]).observe("paint", function handleEntries(arg0) {
        const iter = arg0[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp9 = nextResult;
          if ("first-contentful-paint" === nextResult.name) {
            let tmp10 = observeResult;
            let disconnectResult = observeResult.disconnect();
            let tmp12 = nextResult;
            let tmp13 = firstHiddenTime;
            if (tmp9.startTime < firstHiddenTime.firstHiddenTime) {
              let tmp2 = metric;
              let _Math = Math;
              let tmp3 = nextResult;
              let tmp4 = callback;
              let tmp5 = firstHiddenTime;
              let obj = callback(firstHiddenTime[3]);
              metric.value = Math.max(tmp9.startTime - obj.getActivationStart(), 0);
              let entries = metric.entries;
              let arr = entries.push(tmp9);
              let tmp7 = callback;
              let tmp8 = callback(true);
            }
          }
          continue;
        }
      });
      if (observeResult) {
        const obj4 = callback(reportAllChanges[5]);
        callback = obj4.bindReporter(callback, metric, outer1_2, reportAllChanges.reportAllChanges);
      }
    });
  }
};
