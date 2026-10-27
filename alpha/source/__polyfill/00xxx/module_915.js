// Module ID: 915
// Function ID: 916
// Dependencies: [913]
// Exports: addPageListener, removePageListener

// Module 915
import _mod913 from "module_913" /* 913 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addPageListener = function addPageListener(pagehide, onVisibilityUpdate, arg2) {
  if (_mod913.WINDOW.document) {
    const WINDOW = _mod913.WINDOW;
    const listener = WINDOW.addEventListener(pagehide, onVisibilityUpdate, arg2);
  }
};
export const removePageListener = function removePageListener(pagehide, onVisibilityUpdate, arg2) {
  if (_mod913.WINDOW.document) {
    const WINDOW = _mod913.WINDOW;
    const removed = WINDOW.removeEventListener(pagehide, onVisibilityUpdate, arg2);
  }
};
