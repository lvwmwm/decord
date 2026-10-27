// Module ID: 914
// Function ID: 915
// Name: FCPThresholds
// Dependencies: [915, 917, 921, 919, 923, 924]
// Exports: onFCP

// Module 914 (FCPThresholds)
import _mod917 from "module_917" /* 917 */;
import _mod921 from "module_921" /* 921 */;
import observe from "observe" /* 923 */;

const require = globalThis.__r;
let _require, closure_0;

let tmp;
const bindReporter = tmp(924);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const items = [1800, 3000];

export const FCPThresholds = items;
export const onFCP = (arg0) => {
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let obj2 = require("whenActivated");
  obj2.whenActivated(() => {
    let tmp2 = dependencyMap;
    obj = _mod917;
    const visibilityWatcher = obj.getVisibilityWatcher();
    const obj2 = _mod921;
    const metric = obj2.initMetric("FCP");
    const obj3 = observe;
    const observeResult = obj3.observe("paint", (arg0) => {
      const iter = arg0[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp2 = nextResult;
        if ("first-contentful-paint" === nextResult.name) {
          let disconnectResult = observeResult.disconnect();
          if (tmp2.startTime < firstHiddenTime.firstHiddenTime) {
            let _Math = Math;
            let startTime = tmp2.startTime;
            obj = closure_2_0(closure_2_1[3]);
            metric.value = max(startTime - obj.getActivationStart(), 0);
            let entries = metric.entries;
            let arr = entries.push(tmp2);
            let tmp9 = closure_0(true);
          }
        }
        continue;
      }
    });
    if (observeResult) {
      const tmpResult = bindReporter;
      let tmp5 = closure_0;
      let tmp6 = items;
      let tmp8 = tmpResult;
      let tmp9 = metric;
      closure_0 = tmpResult.bindReporter(closure_0, metric, items, obj.reportAllChanges);
    }
  });
};
