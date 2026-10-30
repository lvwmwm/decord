// Module ID: 903
// Function ID: 904
// Dependencies: [901]
// Exports: addPageListener, removePageListener

// Module 903
import _mod901 from "module_901" /* 901 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function addPageListener(pagehide, onVisibilityUpdate, arg2) {
  if (_mod901.WINDOW.document) {
    const WINDOW = _mod901.WINDOW;
    const listener = WINDOW.addEventListener(pagehide, onVisibilityUpdate, arg2);
  }
}
export function removePageListener(pagehide, onVisibilityUpdate, arg2) {
  if (_mod901.WINDOW.document) {
    const WINDOW = _mod901.WINDOW;
    const removed = WINDOW.removeEventListener(pagehide, onVisibilityUpdate, arg2);
  }
}
