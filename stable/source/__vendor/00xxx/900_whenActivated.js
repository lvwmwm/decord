// Module ID: 900
// Function ID: 901
// Name: whenActivated
// Dependencies: [901]
// Exports: whenActivated

// Module 900 (whenActivated)
import _mod901 from "module_901" /* 901 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const whenActivated = (fn) => {
  let closure_0 = fn;
  const _document = _mod901.WINDOW.document;
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
