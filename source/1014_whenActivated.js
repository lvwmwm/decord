// Module ID: 1014
// Function ID: 11049
// Name: whenActivated
// Dependencies: [1015]

// Module 1014 (whenActivated)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.whenActivated = function whenActivated(arg0) {
  const _require = arg0;
  const _document = _require(1015).WINDOW.document;
  if (null != _document) {
    if (_document.prerendering) {
      const listener = globalThis.addEventListener("prerenderingchange", () => callback(), true);
    }
  }
  arg0();
};
