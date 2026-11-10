// Module ID: 898
// Function ID: 899
// Name: CLSThresholds
// Dependencies: [899, 910, 906, 902, 911, 912, 908, 909, 901]
// Exports: onCLS

// Module 898 (CLSThresholds)
import _mod902 from "module_902" /* 902 */;
import _mod906 from "module_906" /* 906 */;
import observe from "observe" /* 908 */;
import _mod911 from "module_911" /* 911 */;
import LayoutShiftManager from "LayoutShiftManager" /* 912 */;

const require = globalThis.__r;
let _require;

let tmp;
const _mod901 = tmp(901);
const bindReporter = tmp(909);
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
    obj = _mod906;
    const metric = obj.initMetric("CLS", 0);
    const obj2 = _mod902;
    const visibilityWatcher = obj2.getVisibilityWatcher();
    let tmp4 = obj;
    const obj4 = _mod911;
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
      const WINDOW = _mod901.WINDOW;
      if (WINDOW != null) {
        const _setTimeout = WINDOW.setTimeout;
        if (_setTimeout != null) {
          _setTimeout(bindReporterResult);
        }
      }
    }
  }));
};
