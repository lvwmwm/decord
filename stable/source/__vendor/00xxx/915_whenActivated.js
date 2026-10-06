// Module ID: 915
// Function ID: 916
// Name: whenActivated
// Dependencies: [916]
// Exports: whenActivated

// Module 915 (whenActivated)
import _mod916 from "module_916" /* 916 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const whenActivated = (fn) => {
  let closure_0 = fn;
  const _document = _mod916.WINDOW.document;
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
