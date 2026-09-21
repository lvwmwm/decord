// Module ID: 905
// Function ID: 906
// Name: CLSThresholds
// Dependencies: [906, 917, 913, 909, 918, 919, 915, 916, 908]
// Exports: onCLS

// Module 905 (CLSThresholds)
import _mod909 from "module_909" /* 909 */;
import _mod913 from "module_913" /* 913 */;
import observe from "observe" /* 915 */;
import _mod918 from "module_918" /* 918 */;
import LayoutShiftManager from "LayoutShiftManager" /* 919 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const items = [0.1, 0.25];

export const CLSThresholds = items;
export const onCLS = (arg0) => {
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let obj2 = require("FCPThresholds");
  obj2.onFCP(require("runOnce").runOnce(() => {
    obj = _mod913;
    const metric = obj.initMetric("CLS", 0);
    const visibilityWatcher = _mod909.getVisibilityWatcher();
    closure_2 = _mod918.initUnique(obj, LayoutShiftManager.LayoutShiftManager);
    function handleEntries(arg0) {
      while (tmp !== undefined) {
        let _processEntryResult = closure_2._processEntry(tmp2);
        continue;
      }
      if (closure_2._sessionValue > metric.value) {
        ({ _sessionValue: tmp7.value, _sessionEntries: tmp7.entries } = closure_2);
        bindReporterResult();
      }
    }
    let tmp4 = obj;
    const observeResult = observe.observe("layout-shift", handleEntries);
    if (observeResult) {
      const tmpResult = tmp(916);
      const bindReporterResult = tmpResult.bindReporter(closure_0, metric, items, tmp4.reportAllChanges);
      closure_0 = bindReporterResult;
      visibilityWatcher.onHidden(() => {
        handleEntries(observeResult.takeRecords());
        bindReporterResult(true);
      });
      const WINDOW = tmp(908).WINDOW;
      if (WINDOW != null) {
        const _setTimeout = WINDOW.setTimeout;
        if (_setTimeout != null) {
          _setTimeout(bindReporterResult);
        }
      }
    }
  }));
};
