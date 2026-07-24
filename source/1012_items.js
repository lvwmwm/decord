// Module ID: 1012
// Function ID: 11041
// Name: items
// Dependencies: [1013, 1024, 1020, 1016, 1025, 1026, 1022, 1023, 1015]

// Module 1012 (items)
const require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const items = [0.1, 0.25];
arg5.CLSThresholds = items;
arg5.onCLS = function onCLS(arg0, arg1) {
  const _require = arg0;
  if (arguments.length > 1) {
    const dependencyMap = {};
    let obj = _require(1013);
    obj.onFCP(_require(1024).runOnce(() => {
      const metric = callback(1020).initMetric("CLS", 0);
      const obj = callback(1020);
      const visibilityWatcher = callback(1016).getVisibilityWatcher();
      const obj2 = callback(1016);
      let closure_2 = callback(1025).initUnique(metric, callback(1026).LayoutShiftManager);
      function handleEntries(items) {
        for (const item10003 of arg0) {
          let tmp = closure_2;
          let _processEntryResult = closure_2._processEntry(item10003);
          continue;
        }
        if (closure_2._sessionValue > metric.value) {
          ({ _sessionValue: metric.value, _sessionEntries: metric.entries } = closure_2);
          bindReporterResult();
        }
      }
      const obj4 = callback(1025);
      const observeResult = callback(1022).observe("layout-shift", handleEntries);
      if (observeResult) {
        const obj6 = callback(1023);
        const bindReporterResult = obj6.bindReporter(callback, metric, outer1_2, metric.reportAllChanges);
        callback = bindReporterResult;
        visibilityWatcher.onHidden(() => {
          handleEntries(observeResult.takeRecords());
          bindReporterResult(true);
        });
        const WINDOW = callback(1015).WINDOW;
        if (!tmp13) {
          const timerId = WINDOW.setTimeout(bindReporterResult);
        }
        tmp13 = null == WINDOW || null == WINDOW.setTimeout;
      }
    }));
  }
};
