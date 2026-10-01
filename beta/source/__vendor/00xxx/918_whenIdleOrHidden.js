// Module ID: 918
// Function ID: 919
// Name: whenIdleOrHidden
// Dependencies: [904, 913, 906]
// Exports: whenIdleOrHidden

// Module 918 (whenIdleOrHidden)
import _mod906 from "module_906" /* 906 */;

const require = globalThis.__r;
let _require;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const whenIdleOrHidden = (fn) => {
  _require = fn;
  const tmp3 = require("module_904").WINDOW.requestIdleCallback || require("module_904").WINDOW.setTimeout;
  const _document = tmp(904).WINDOW.document;
  let visibilityState;
  if (_document != null) {
    visibilityState = _document.visibilityState;
  }
  if ("hidden" === visibilityState) {
    fn();
  } else {
    const tmpResult = require("runOnce");
    const runOnceResult = tmpResult.runOnce(fn);
    _require = runOnceResult;
    const tmpResult3 = require("module_906");
    tmpResult3.addPageListener("visibilitychange", runOnceResult, { once: true, capture: true });
    const tmpResult4 = require("module_906");
    tmpResult4.addPageListener("pagehide", runOnceResult, { once: true, capture: true });
    tmp3(() => {
      fn();
      const obj = _mod906;
      obj.removePageListener("visibilitychange", fn, { capture: true });
      const obj2 = _mod906;
      obj2.removePageListener("pagehide", fn, { capture: true });
    });
  }
};
