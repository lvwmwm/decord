// Module ID: 1017
// Function ID: 11054
// Name: addPageListener
// Dependencies: [67895296]

// Module 1017 (addPageListener)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.addPageListener = function addPageListener(pagehide, onVisibilityUpdate, arg2) {
  if (onVisibilityUpdate(arg6[0]).WINDOW.document) {
    const WINDOW = onVisibilityUpdate(arg6[0]).WINDOW;
    const listener = WINDOW.addEventListener(pagehide, onVisibilityUpdate, arg2);
  }
};
arg5.removePageListener = function removePageListener(pagehide, runOnceResult, arg2) {
  if (runOnceResult(arg6[0]).WINDOW.document) {
    const WINDOW = runOnceResult(arg6[0]).WINDOW;
    const removed = WINDOW.removeEventListener(pagehide, runOnceResult, arg2);
  }
};
