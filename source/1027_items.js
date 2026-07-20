// Module ID: 1027
// Function ID: 11083
// Name: items
// Dependencies: []

// Module 1027 (items)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const items = ["<string:818741249>", "<string:21889025>"];
arg5.LCPThresholds = items;
arg5.onLCP = function onLCP(arg0, arg1) {
  arg1 = arg0;
  if (arguments.length > 1) {
    let closure_1 = {};
    arg1(closure_1[0]).whenActivated(() => {
      let obj = callback(reportAllChanges[1]);
      const reportAllChanges = obj.getVisibilityWatcher();
      const metric = callback(reportAllChanges[2]).initMetric("LCP");
      const obj2 = callback(reportAllChanges[2]);
      let closure_3 = callback(reportAllChanges[3]).initUnique(reportAllChanges, callback(reportAllChanges[4]).LCPEntryManager);
      function handleEntries(arr) {
        let substr = arr;
        if (!closure_1.reportAllChanges) {
          substr = arr.slice(-1);
        }
        const iter = substr[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp9 = nextResult;
          let tmp10 = closure_3;
          let _processEntryResult = closure_3._processEntry(nextResult);
          let tmp12 = closure_1;
          if (nextResult.startTime < closure_1.firstHiddenTime) {
            let tmp3 = metric;
            let _Math = Math;
            let tmp4 = nextResult;
            let tmp5 = callback;
            let tmp6 = closure_1;
            let obj = callback(closure_1[5]);
            metric.value = Math.max(tmp9.startTime - obj.getActivationStart(), 0);
            let items = [tmp9];
            metric.entries = items;
            let tmp7 = callback;
            let tmp8 = callback();
          }
          // continue
        }
      }
      const obj3 = callback(reportAllChanges[3]);
      const observeResult = callback(reportAllChanges[6]).observe("largest-contentful-paint", handleEntries);
      if (observeResult) {
        const obj5 = callback(reportAllChanges[7]);
        const callback = obj5.bindReporter(callback, metric, metric, reportAllChanges.reportAllChanges);
        let closure_6 = callback(reportAllChanges[8]).runOnce(() => {
          handleEntries(observeResult.takeRecords());
          observeResult.disconnect();
          callback(true);
        });
        function stopListeningWrapper(isTrusted) {
          if (isTrusted.isTrusted) {
            let obj = callback(closure_1[9]);
            obj.whenIdleOrHidden(closure_6);
            obj = { capture: true };
            callback(closure_1[10]).removePageListener(isTrusted.type, stopListeningWrapper, obj);
            const obj2 = callback(closure_1[10]);
          }
        }
        const tmp11 = [][Symbol.iterator]();
        while (tmp11 !== undefined) {
          let tmp14 = callback;
          let tmp15 = reportAllChanges;
          let obj7 = callback(reportAllChanges[10]);
          let tmp16 = stopListeningWrapper;
          obj = { capture: true };
          let addPageListenerResult = obj7.addPageListener(tmp12, tmp10, obj);
          // continue
        }
        const obj6 = callback(reportAllChanges[8]);
        const tmp10 = stopListeningWrapper;
      }
    });
  }
};
