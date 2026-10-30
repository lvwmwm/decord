// Module ID: 922
// Function ID: 923
// Dependencies: [901, 903]
// Exports: onHidden

// Module 922
import _mod901 from "module_901" /* 901 */;

const require = globalThis.__r;
let _require;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const onHidden = (arg0) => {
  let closure_0;
  _require = arg0;
  function onHiddenOrPageHide(type) {
    let tmp = "pagehide" !== type.type;
    if (tmp) {
      const _document = _mod901.WINDOW.document;
      let visibilityState;
      if (_document != null) {
        visibilityState = _document.visibilityState;
      }
      tmp = "hidden" !== visibilityState;
    }
    if (!tmp) {
      closure_0(type);
    }
  }
  const obj = require("module_903");
  obj.addPageListener("visibilitychange", onHiddenOrPageHide, { capture: true, once: true });
  const obj2 = require("module_903");
  obj2.addPageListener("pagehide", onHiddenOrPageHide, { capture: true, once: true });
};
