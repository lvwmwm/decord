// Module ID: 922
// Function ID: 923
// Name: whenIdleOrHidden
// Dependencies: [908, 917, 910]
// Exports: whenIdleOrHidden

// Module 922 (whenIdleOrHidden)
import _mod910 from "module_910" /* 910 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const whenIdleOrHidden = (fn) => {
  _require = fn;
  const _document = tmp(908).WINDOW.document;
  let visibilityState;
  if (_document != null) {
    visibilityState = _document.visibilityState;
  }
  if ("hidden" === visibilityState) {
    fn();
  } else {
    const runOnceResult = tmp(917).runOnce(fn);
    _require = runOnceResult;
    const tmpResult = tmp(917);
    tmp(910).addPageListener("visibilitychange", runOnceResult, { once: true, capture: true });
    const tmpResult3 = tmp(910);
    tmp(910).addPageListener("pagehide", runOnceResult, { once: true, capture: true });
    tmp3(() => {
      closure_0();
      _mod910.removePageListener("visibilitychange", closure_0, { capture: true });
      _mod910.removePageListener("pagehide", closure_0, { capture: true });
    });
    const tmpResult4 = tmp(910);
  }
};
