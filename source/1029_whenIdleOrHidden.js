// Module ID: 1029
// Function ID: 11099
// Name: whenIdleOrHidden
// Dependencies: [1015, 1024, 1017]

// Module 1029 (whenIdleOrHidden)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.whenIdleOrHidden = function whenIdleOrHidden(closure_6) {
  let _require = closure_6;
  let _setTimeout = _require(1015).WINDOW.requestIdleCallback;
  if (!_setTimeout) {
    _setTimeout = _require(1015).WINDOW.setTimeout;
  }
  const _document = _require(1015).WINDOW.document;
  let visibilityState;
  if (null != _document) {
    visibilityState = _document.visibilityState;
  }
  if ("hidden" === visibilityState) {
    closure_6();
  } else {
    const runOnceResult = _require(1024).runOnce(closure_6);
    _require = runOnceResult;
    let obj = _require(1024);
    _require(1017).addPageListener("visibilitychange", runOnceResult, { once: true, capture: true });
    const obj2 = _require(1017);
    _require(1017).addPageListener("pagehide", runOnceResult, { once: true, capture: true });
    _setTimeout(() => {
      callback();
      callback(outer1_1[2]).removePageListener("visibilitychange", callback, { capture: true });
      const obj = callback(outer1_1[2]);
      callback(outer1_1[2]).removePageListener("pagehide", callback, { capture: true });
    });
    const obj3 = _require(1017);
  }
};
