// Module ID: 934
// Function ID: 935
// Dependencies: [913, 915]
// Exports: onHidden

// Module 934
import _mod913 from "module_913" /* 913 */;

const require = globalThis.__r;
let _require;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const onHidden = (arg0) => {
  let closure_0;
  _require = arg0;
  function onHiddenOrPageHide(type) {
    let tmp = "pagehide" !== type.type;
    if (tmp) {
      const _document = _mod913.WINDOW.document;
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
  const obj = require("module_915");
  obj.addPageListener("visibilitychange", onHiddenOrPageHide, { capture: true, once: true });
  const obj2 = require("module_915");
  obj2.addPageListener("pagehide", onHiddenOrPageHide, { capture: true, once: true });
};
