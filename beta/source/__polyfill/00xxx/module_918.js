// Module ID: 918
// Function ID: 919
// Dependencies: [916]
// Exports: addPageListener, removePageListener

// Module 918
import _mod916 from "module_916" /* 916 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addPageListener = function addPageListener(pagehide, onVisibilityUpdate, arg2) {
  if (_mod916.WINDOW.document) {
    const WINDOW = _mod916.WINDOW;
    const listener = WINDOW.addEventListener(pagehide, onVisibilityUpdate, arg2);
  }
};
export const removePageListener = function removePageListener(pagehide, onVisibilityUpdate, arg2) {
  if (_mod916.WINDOW.document) {
    const WINDOW = _mod916.WINDOW;
    const removed = WINDOW.removeEventListener(pagehide, onVisibilityUpdate, arg2);
  }
};
