// Module ID: 1036
// Function ID: 11170
// Name: onHidden
// Dependencies: [1015, 1017]

// Module 1036 (onHidden)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.onHidden = function onHidden(arg0) {
  const _require = arg0;
  function onHiddenOrPageHide(type) {
    let tmp = "pagehide" !== type.type;
    if (tmp) {
      let visibilityState;
      const _document = callback(outer1_1[0]).WINDOW.document;
      if (null != _document) {
        visibilityState = _document.visibilityState;
      }
      tmp = "hidden" !== visibilityState;
    }
    if (!tmp) {
      callback(type);
    }
  }
  _require(1017).addPageListener("visibilitychange", onHiddenOrPageHide, { capture: true, once: true });
  const obj = _require(1017);
  _require(1017).addPageListener("pagehide", onHiddenOrPageHide, { capture: true, once: true });
};
