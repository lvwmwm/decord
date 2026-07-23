// Module ID: 1017
// Function ID: 11059
// Name: addPageListener
// Dependencies: [1015]

// Module 1017 (addPageListener)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.addPageListener = function addPageListener(pagehide, onVisibilityUpdate, arg2) {
  if (require(1015) /* WINDOW */.WINDOW.document) {
    const WINDOW = require(1015) /* WINDOW */.WINDOW;
    const listener = WINDOW.addEventListener(pagehide, onVisibilityUpdate, arg2);
  }
};
arg5.removePageListener = function removePageListener(pagehide, closure_0, arg2) {
  if (require(1015) /* WINDOW */.WINDOW.document) {
    const WINDOW = require(1015) /* WINDOW */.WINDOW;
    const removed = WINDOW.removeEventListener(pagehide, closure_0, arg2);
  }
};
