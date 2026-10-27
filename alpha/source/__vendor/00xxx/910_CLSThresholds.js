// Module ID: 910
// Function ID: 911
// Name: CLSThresholds
// Dependencies: [911, 922, 918, 914, 923, 924, 920, 921, 913]
// Exports: onCLS

// Module 910 (CLSThresholds)
import _mod914 from "module_914" /* 914 */;
import _mod918 from "module_918" /* 918 */;
import observe from "observe" /* 920 */;
import _mod923 from "module_923" /* 923 */;
import LayoutShiftManager from "LayoutShiftManager" /* 924 */;

const require = globalThis.__r;
let _require;

let tmp;
const _mod913 = tmp(913);
const bindReporter = tmp(921);
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
    obj = _mod918;
    const metric = obj.initMetric("CLS", 0);
    const obj2 = _mod914;
    const visibilityWatcher = obj2.getVisibilityWatcher();
    let tmp4 = obj;
    const obj4 = _mod923;
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
      const WINDOW = _mod913.WINDOW;
      if (WINDOW != null) {
        const _setTimeout = WINDOW.setTimeout;
        if (_setTimeout != null) {
          _setTimeout(bindReporterResult);
        }
      }
    }
  }));
};
