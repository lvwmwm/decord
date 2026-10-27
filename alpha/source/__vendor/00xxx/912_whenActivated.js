// Module ID: 912
// Function ID: 913
// Name: whenActivated
// Dependencies: [913]
// Exports: whenActivated

// Module 912 (whenActivated)
import _mod913 from "module_913" /* 913 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const whenActivated = (fn) => {
  let closure_0 = fn;
  const _document = _mod913.WINDOW.document;
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
