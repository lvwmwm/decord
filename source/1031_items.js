// Module ID: 1031
// Function ID: 11106
// Name: items
// Dependencies: []

// Module 1031 (items)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const items = [false, false];
arg5.INPThresholds = items;
arg5.onINP = function onINP(arg0) {
  const arg1 = arg0;
  if (arguments.length > 1) {
    let closure_1 = {};
    const _globalThis = globalThis;
    if (globalThis.PerformanceEventTiming) {
      if ("interactionId" in globalThis.PerformanceEventTiming.prototype) {
        const visibilityWatcher = arg1(closure_1[0]).getVisibilityWatcher();
        const obj = arg1(closure_1[0]);
        arg1(closure_1[1]).whenActivated(() => {
          let obj = callback(closure_1[2]);
          const interactionCountPolyfill = obj.initInteractionCountPolyfill();
          const metric = callback(closure_1[3]).initMetric("INP");
          closure_1 = metric;
          const obj2 = callback(closure_1[3]);
          let closure_2 = callback(closure_1[4]).initUnique(closure_1, callback(closure_1[5]).InteractionManager);
          function handleEntries(arg0) {
            const callback = arg0;
            callback(metric[6]).whenIdleOrHidden(() => {
              for (const item10004 of closure_0) {
                let tmp = closure_2;
                let _processEntryResult = closure_2._processEntry(item10004);
              }
              const result = closure_2._estimateP98LongestInteraction();
              let tmp4 = result;
              if (result) {
                tmp4 = result._latency !== value.value;
              }
              if (tmp4) {
                ({ _latency: closure_1.value, entries: closure_1.entries } = result);
                arg0();
              }
            });
          }
          const obj3 = callback(closure_1[4]);
          obj = {};
          const durationThreshold = closure_1.durationThreshold;
          let num = 40;
          if (null != durationThreshold) {
            num = durationThreshold;
          }
          obj.durationThreshold = num;
          const observeResult = callback(closure_1[7]).observe("event", handleEntries, obj);
          const obj4 = callback(closure_1[7]);
          const callback = callback(closure_1[8]).bindReporter(callback, metric, closure_2, closure_1.reportAllChanges);
          if (observeResult) {
            observeResult.observe({ subLabel: null, disabled: null });
            closure_2.onHidden(() => {
              handleEntries(observeResult.takeRecords());
              callback(true);
            });
          }
        });
        const obj2 = arg1(closure_1[1]);
      }
    }
  }
};
