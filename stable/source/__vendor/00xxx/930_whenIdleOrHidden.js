// Module ID: 930
// Function ID: 931
// Name: whenIdleOrHidden
// Dependencies: [916, 925, 918]
// Exports: whenIdleOrHidden

// Module 930 (whenIdleOrHidden)
import _mod918 from "module_918" /* 918 */;

const require = globalThis.__r;
let _require;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const whenIdleOrHidden = (fn) => {
  _require = fn;
  const tmp3 = require("module_916").WINDOW.requestIdleCallback || require("module_916").WINDOW.setTimeout;
  const _document = tmp(916).WINDOW.document;
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
    const tmpResult3 = require("module_918");
    tmpResult3.addPageListener("visibilitychange", runOnceResult, { once: true, capture: true });
    const tmpResult4 = require("module_918");
    tmpResult4.addPageListener("pagehide", runOnceResult, { once: true, capture: true });
    tmp3(() => {
      fn();
      const obj = _mod918;
      obj.removePageListener("visibilitychange", fn, { capture: true });
      const obj2 = _mod918;
      obj2.removePageListener("pagehide", fn, { capture: true });
    });
  }
};
