// Module ID: 1029
// Function ID: 11097
// Name: whenIdleOrHidden
// Dependencies: []

// Module 1029 (whenIdleOrHidden)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.whenIdleOrHidden = function whenIdleOrHidden(closure_6) {
  let arg1 = closure_6;
  let _setTimeout = arg1(arg6[0]).WINDOW.requestIdleCallback;
  if (!_setTimeout) {
    _setTimeout = arg1(arg6[0]).WINDOW.setTimeout;
  }
  const _document = arg1(arg6[0]).WINDOW.document;
  let visibilityState;
  if (null != _document) {
    visibilityState = _document.visibilityState;
  }
  if ("hidden" === visibilityState) {
    closure_6();
  } else {
    const runOnceResult = arg1(arg6[1]).runOnce(closure_6);
    arg1 = runOnceResult;
    const obj = arg1(arg6[1]);
    arg1(arg6[2]).addPageListener("visibilitychange", runOnceResult, { "Null": null, "Null": null });
    const obj2 = arg1(arg6[2]);
    arg1(arg6[2]).addPageListener("pagehide", runOnceResult, { "Null": null, "Null": null });
    _setTimeout(() => {
      runOnceResult();
      runOnceResult(closure_1[2]).removePageListener("visibilitychange", runOnceResult, { capture: true });
      const obj = runOnceResult(closure_1[2]);
      runOnceResult(closure_1[2]).removePageListener("pagehide", runOnceResult, { capture: true });
    });
    const obj3 = arg1(arg6[2]);
  }
};
