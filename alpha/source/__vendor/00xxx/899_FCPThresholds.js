// Module ID: 899
// Function ID: 900
// Name: FCPThresholds
// Dependencies: [900, 902, 906, 904, 908, 909]
// Exports: onFCP

// Module 899 (FCPThresholds)
import _mod902 from "module_902" /* 902 */;
import _mod906 from "module_906" /* 906 */;
import observe from "observe" /* 908 */;

const require = globalThis.__r;
let _require, closure_0;

let tmp;
const bindReporter = tmp(909);
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
    obj = _mod902;
    const visibilityWatcher = obj.getVisibilityWatcher();
    const obj2 = _mod906;
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
