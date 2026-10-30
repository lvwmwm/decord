// Module ID: 915
// Function ID: 916
// Name: whenIdleOrHidden
// Dependencies: [901, 910, 903]
// Exports: whenIdleOrHidden

// Module 915 (whenIdleOrHidden)
import _mod903 from "module_903" /* 903 */;

const require = globalThis.__r;
let _require;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const whenIdleOrHidden = (fn) => {
  _require = fn;
  const tmp3 = require("module_901").WINDOW.requestIdleCallback || require("module_901").WINDOW.setTimeout;
  const _document = tmp(901).WINDOW.document;
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
    const tmpResult3 = require("module_903");
    tmpResult3.addPageListener("visibilitychange", runOnceResult, { once: true, capture: true });
    const tmpResult4 = require("module_903");
    tmpResult4.addPageListener("pagehide", runOnceResult, { once: true, capture: true });
    tmp3(() => {
      fn();
      const obj = _mod903;
      obj.removePageListener("visibilitychange", fn, { capture: true });
      const obj2 = _mod903;
      obj2.removePageListener("pagehide", fn, { capture: true });
    });
  }
};
