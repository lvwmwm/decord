// Module ID: 1031
// Function ID: 11108
// Name: items
// Dependencies: [1016, 1014, 1032, 1020, 1025, 1033, 1029, 1022, 1023]

// Module 1031 (items)
const require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const items = [200, 500];
arg5.INPThresholds = items;
arg5.onINP = function onINP(arg0) {
  const _require = arg0;
  if (arguments.length > 1) {
    const dependencyMap = {};
    const _globalThis = globalThis;
    if (globalThis.PerformanceEventTiming) {
      if ("interactionId" in globalThis.PerformanceEventTiming.prototype) {
        const visibilityWatcher = _require(1016).getVisibilityWatcher();
        let obj = _require(1016);
        _require(1014).whenActivated(() => {
          let obj = callback(1032);
          const interactionCountPolyfill = obj.initInteractionCountPolyfill();
          const metric = callback(1020).initMetric("INP");
          const obj2 = callback(1020);
          let closure_2 = callback(1025).initUnique(metric, callback(1033).InteractionManager);
          function handleEntries(arg0) {
            const callback = arg0;
            callback(metric[6]).whenIdleOrHidden(() => {
              for (const item10004 of closure_0) {
                let tmp = outer1_2;
                let _processEntryResult = outer1_2._processEntry(item10004);
                continue;
              }
              const result = outer1_2._estimateP98LongestInteraction();
              let tmp4 = result;
              if (result) {
                tmp4 = result._latency !== outer1_1.value;
              }
              if (tmp4) {
                ({ _latency: outer1_1.value, entries: outer1_1.entries } = result);
                callback();
              }
            });
          }
          const obj3 = callback(1025);
          obj = {};
          const durationThreshold = metric.durationThreshold;
          let num = 40;
          if (null != durationThreshold) {
            num = durationThreshold;
          }
          obj.durationThreshold = num;
          const observeResult = callback(1022).observe("event", handleEntries, obj);
          const obj4 = callback(1022);
          callback = callback(1023).bindReporter(callback, metric, closure_2, metric.reportAllChanges);
          if (observeResult) {
            observeResult.observe({ type: "first-input", buffered: true });
            closure_2.onHidden(() => {
              handleEntries(observeResult.takeRecords());
              callback(true);
            });
          }
        });
        let obj2 = _require(1014);
      }
    }
  }
};
