// Module ID: 1036
// Function ID: 11168
// Name: onHidden
// Dependencies: []

// Module 1036 (onHidden)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.onHidden = function onHidden(arg0) {
  const arg1 = arg0;
  function onHiddenOrPageHide(type) {
    let tmp = "pagehide" !== type.type;
    if (tmp) {
      let visibilityState;
      const _document = type(closure_1[0]).WINDOW.document;
      if (null != _document) {
        visibilityState = _document.visibilityState;
      }
      tmp = "hidden" !== visibilityState;
    }
    if (!tmp) {
      type(type);
    }
  }
  arg1(arg6[1]).addPageListener("visibilitychange", onHiddenOrPageHide, { color: null, date: null });
  const obj = arg1(arg6[1]);
  arg1(arg6[1]).addPageListener("pagehide", onHiddenOrPageHide, { color: null, date: null });
};
