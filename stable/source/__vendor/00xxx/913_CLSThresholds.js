// Module ID: 913
// Function ID: 914
// Name: CLSThresholds
// Dependencies: [914, 925, 921, 917, 926, 927, 923, 924, 916]
// Exports: onCLS

// Module 913 (CLSThresholds)
import _mod917 from "module_917" /* 917 */;
import _mod921 from "module_921" /* 921 */;
import observe from "observe" /* 923 */;
import _mod926 from "module_926" /* 926 */;
import LayoutShiftManager from "LayoutShiftManager" /* 927 */;

const require = globalThis.__r;
let _require;

let tmp;
const _mod916 = tmp(916);
const bindReporter = tmp(924);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const items = [0.1, 0.25];

export const CLSThresholds = items;
export const onCLS = (arg0) => {
  let closure_0;
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let tmp = require("FCPThresholds");
  const onFCP = tmp.onFCP;
  let obj2 = require("runOnce");
  onFCP(obj2.runOnce(() => {
    let tmp = require;
    const tmp2 = dependencyMap;
    obj = _mod921;
    const metric = obj.initMetric("CLS", 0);
    const obj2 = _mod917;
    const visibilityWatcher = obj2.getVisibilityWatcher();
    let tmp4 = obj;
    const obj4 = _mod926;
    let closure_2 = obj4.initUnique(obj, LayoutShiftManager.LayoutShiftManager);
    function handleEntries(arg0) {
      const tmp = arg0[Symbol.iterator]();
      while (tmp !== undefined) {
        let _processEntryResult = closure_2._processEntry(tmp2);
        continue;
      }
      const tmp6 = closure_2;
      if (closure_2._sessionValue > metric.value) {
        ({ _sessionValue: tmp7.value, _sessionEntries: tmp7.entries } = tmp6);
        bindReporterResult();
      }
    }
    const obj5 = observe;
    const observeResult = obj5.observe("layout-shift", handleEntries);
    if (observeResult) {
      const tmpResult = bindReporter;
      let tmp6 = closure_0;
      const tmp7 = items;
      const bindReporterResult = tmpResult.bindReporter(closure_0, metric, items, tmp4.reportAllChanges);
      visibilityWatcher.onHidden(() => {
        handleEntries(observeResult.takeRecords());
        bindReporterResult(true);
      });
      const WINDOW = _mod916.WINDOW;
      if (WINDOW != null) {
        const _setTimeout = WINDOW.setTimeout;
        if (_setTimeout != null) {
          _setTimeout(bindReporterResult);
        }
      }
    }
  }));
};
