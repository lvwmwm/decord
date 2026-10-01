// Module ID: 903
// Function ID: 904
// Name: whenActivated
// Dependencies: [904]
// Exports: whenActivated

// Module 903 (whenActivated)
import _mod904 from "module_904" /* 904 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const whenActivated = (fn) => {
  let closure_0 = fn;
  const _document = _mod904.WINDOW.document;
  let prerendering;
  if (_document != null) {
    prerendering = _document.prerendering;
  }
  if (prerendering) {
    const listener = globalThis.addEventListener("prerenderingchange", () => closure_0(), true);
  } else {
    fn();
  }
};
