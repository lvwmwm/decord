// Module ID: 932
// Function ID: 933
// Name: INPThresholds
// Dependencies: [917, 915, 933, 921, 926, 934, 930, 923, 924]
// Exports: onINP

// Module 932 (INPThresholds)
import _mod921 from "module_921" /* 921 */;
import observe2 from "observe" /* 923 */;
import _mod926 from "module_926" /* 926 */;
import _mod933 from "module_933" /* 933 */;
import InteractionManager from "InteractionManager" /* 934 */;

const require = globalThis.__r;
let _require, closure_0, closure_2;

let tmp;
const bindReporter = tmp(924);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const items = [200, 500];

export const INPThresholds = items;
export const onINP = (arg0) => {
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let visibilityWatcher;
  if (globalThis.PerformanceEventTiming) {
    if ("interactionId" in globalThis.PerformanceEventTiming.prototype) {
      let tmp = _require;
      let obj2 = require("module_917");
      visibilityWatcher = obj2.getVisibilityWatcher();
      let obj3 = require("whenActivated");
      obj3.whenActivated(() => {
        let tmp = require;
        obj = _mod933;
        const interactionCountPolyfill = obj.initInteractionCountPolyfill();
        const obj2 = _mod921;
        const metric = obj2.initMetric("INP");
        const tmp5 = obj;
        const obj3 = _mod926;
        closure_2 = obj3.initUnique(obj, InteractionManager.InteractionManager);
        function handleEntries(arg0) {
          closure_0 = arg0;
          obj = closure_0(metric[6]);
          obj.whenIdleOrHidden(() => {
            for (const item10005 of closure_0) {
              let _processEntryResult = closure_2._processEntry(item10005);
              continue;
            }
            const result = closure_2._estimateP98LongestInteraction();
            const tmp4 = result && result._latency !== metric.value;
            if (tmp4) {
              ({ _latency: metric.value, entries: metric.entries } = result);
              closure_0();
            }
          });
        }
        let num = obj.durationThreshold;
        const observe = observe2.observe;
        if (num == null) {
          num = 40;
        }
        const observeResult = observe("event", handleEntries, { durationThreshold: num });
        const tmpResult = bindReporter;
        closure_0 = tmpResult.bindReporter(closure_0, metric, items, tmp5.reportAllChanges);
        if (observeResult) {
          observeResult.observe({ type: "first-input", buffered: true });
          closure_2.onHidden(() => {
            if (typeof handleEntries === "function") {
              closure_0 = observeResult.takeRecords();
              let tmp = closure_0;
              obj = closure_0(metric[6]);
              obj.whenIdleOrHidden(() => {
                for (const item10005 of closure_0) {
                  let _processEntryResult = closure_2._processEntry(item10005);
                  continue;
                }
                const result = closure_2._estimateP98LongestInteraction();
                const tmp4 = result && result._latency !== metric.value;
                if (tmp4) {
                  ({ _latency: metric.value, entries: metric.entries } = result);
                  closure_0();
                }
              });
              let tmp4 = closure_0;
              closure_0(true);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          });
        }
      });
    }
  }
};
