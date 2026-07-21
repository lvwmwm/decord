// Module ID: 1014
// Function ID: 11048
// Name: whenActivated
// Dependencies: []

// Module 1014 (whenActivated)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.whenActivated = function whenActivated(arg0) {
  const arg1 = arg0;
  const _document = arg1(arg6[0]).WINDOW.document;
  if (null != _document) {
    if (_document.prerendering) {
      const listener = globalThis.addEventListener("prerenderingchange", () => arg0(), true);
    }
  }
  arg0();
};
