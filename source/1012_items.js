// Module ID: 1012
// Function ID: 11035
// Name: items
// Dependencies: []

// Module 1012 (items)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const items = [];
arg5.CLSThresholds = items;
arg5.onCLS = function onCLS(arg0, arg1) {
  arg1 = arg0;
  if (arguments.length > 1) {
    let closure_1 = {};
    const obj = arg1(closure_1[0]);
    obj.onFCP(arg1(closure_1[1]).runOnce(() => {
      const metric = arg0(reportAllChanges[2]).initMetric("CLS", 0);
      const reportAllChanges = metric;
      const obj = arg0(reportAllChanges[2]);
      const visibilityWatcher = arg0(reportAllChanges[3]).getVisibilityWatcher();
      const obj2 = arg0(reportAllChanges[3]);
      let closure_2 = arg0(reportAllChanges[4]).initUnique(reportAllChanges, arg0(reportAllChanges[5]).LayoutShiftManager);
      function handleEntries(items) {
        for (const item10003 of arg0) {
          let tmp = closure_2;
          let _processEntryResult = closure_2._processEntry(item10003);
        }
        if (_sessionValue._sessionValue > metric.value) {
          ({ _sessionValue: closure_1.value, _sessionEntries: closure_1.entries } = _sessionValue);
          bindReporterResult();
        }
      }
      const obj4 = arg0(reportAllChanges[4]);
      const observeResult = arg0(reportAllChanges[6]).observe("layout-shift", handleEntries);
      if (observeResult) {
        const obj6 = arg0(reportAllChanges[7]);
        const bindReporterResult = obj6.bindReporter(arg0, metric, closure_2, reportAllChanges.reportAllChanges);
        const arg0 = bindReporterResult;
        visibilityWatcher.onHidden(() => {
          handleEntries(observeResult.takeRecords());
          bindReporterResult(true);
        });
        const WINDOW = arg0(reportAllChanges[8]).WINDOW;
        if (!tmp13) {
          const timerId = WINDOW.setTimeout(bindReporterResult);
        }
        const tmp13 = null == WINDOW || null == WINDOW.setTimeout;
      }
    }));
  }
};
