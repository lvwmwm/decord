// Module ID: 916
// Function ID: 917
// Name: LCPThresholds
// Dependencies: [903, 905, 909, 914, 917, 907, 911, 912, 913, 918, 906]
// Exports: onLCP

// Module 916 (LCPThresholds)
import _mod906 from "module_906" /* 906 */;
import _mod907 from "module_907" /* 907 */;
import whenIdleOrHidden from "whenIdleOrHidden" /* 918 */;

const require = globalThis.__r;
let _require, closure_0;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let items = [2500, 4000];

export const LCPThresholds = items;
export const onLCP = (arg0) => {
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let obj2 = require("whenActivated");
  obj2.whenActivated(() => {
    let tmp4 = obj;
    let tmp3 = obj;
    obj = closure_0(obj[1]);
    const firstHiddenTime = obj.getVisibilityWatcher();
    let obj2 = closure_0(obj[2]);
    const metric = obj2.initMetric("LCP");
    let tmp6 = firstHiddenTime;
    const obj3 = closure_0(obj[3]);
    let closure_3 = obj3.initUnique(firstHiddenTime, closure_0(obj[4]).LCPEntryManager);
    function handleEntries(arr) {
      let substr = arr;
      if (!obj.reportAllChanges) {
        substr = arr.slice(-1);
      }
      const iter = substr[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = nextResult;
        let _processEntryResult = closure_3._processEntry(nextResult);
        if (nextResult.startTime < firstHiddenTime.firstHiddenTime) {
          let _Math = Math;
          let startTime = tmp3.startTime;
          obj = _mod907;
          metric.value = max(startTime - obj.getActivationStart(), 0);
          items = [tmp3];
          metric.entries = items;
          let tmp12 = closure_0();
        }
        continue;
      }
    }
    const obj4 = closure_0(obj[6]);
    obj4.observe("largest-contentful-paint", handleEntries);
    const observeResult = obj4.observe("largest-contentful-paint", handleEntries);
    const tmp = closure_0;
    if (observeResult) {
      let tmp8 = tmp;
      let tmp9 = tmp3;
      const tmp2Result = closure_0(tmp4[7]);
      let tmp10 = closure_0;
      let tmp11 = closure_1_2;
      let tmp12 = tmp2Result;
      closure_0 = tmp2Result.bindReporter(closure_0, metric, closure_1_2, tmp6.reportAllChanges);
      const tmp2Result2 = closure_0(tmp4[8]);
      let closure_6 = tmp2Result2.runOnce(() => {
        handleEntries(observeResult.takeRecords());
        observeResult.disconnect();
        closure_0(true);
      });
      function stopListeningWrapper(isTrusted) {
        if (isTrusted.isTrusted) {
          obj = whenIdleOrHidden;
          obj.whenIdleOrHidden(closure_6);
          const obj2 = _mod906;
          obj2.removePageListener(isTrusted.type, stopListeningWrapper, { capture: true });
        }
      }
      items = ["keydown", "click", "visibilitychange"];
      for (const item10048 of items) {
        let obj7 = closure_0(obj[10]);
        let addPageListenerResult = obj7.addPageListener(item10048, stopListeningWrapper, { capture: true });
        continue;
      }
    }
  });
};
