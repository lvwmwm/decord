// Module ID: 901
// Function ID: 902
// Name: CLSThresholds
// Dependencies: [902, 913, 909, 905, 914, 915, 911, 912, 904]
// Exports: onCLS

// Module 901 (CLSThresholds)
import _mod905 from "module_905" /* 905 */;
import _mod909 from "module_909" /* 909 */;
import observe from "observe" /* 911 */;
import _mod914 from "module_914" /* 914 */;
import LayoutShiftManager from "LayoutShiftManager" /* 915 */;

const require = globalThis.__r;
let _require;

let tmp;
const _mod904 = tmp(904);
const bindReporter = tmp(912);
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
    obj = _mod909;
    const metric = obj.initMetric("CLS", 0);
    const obj2 = _mod905;
    const visibilityWatcher = obj2.getVisibilityWatcher();
    let tmp4 = obj;
    const obj4 = _mod914;
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
      const WINDOW = _mod904.WINDOW;
      if (WINDOW != null) {
        const _setTimeout = WINDOW.setTimeout;
        if (_setTimeout != null) {
          _setTimeout(bindReporterResult);
        }
      }
    }
  }));
};
