// Module ID: 907
// Function ID: 908
// Name: whenActivated
// Dependencies: [908]
// Exports: whenActivated

// Module 907 (whenActivated)
import _mod908 from "module_908" /* 908 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const whenActivated = (fn) => {
  closure_0 = fn;
  const _document = _mod908.WINDOW.document;
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
