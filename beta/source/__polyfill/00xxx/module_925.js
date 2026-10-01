// Module ID: 925
// Function ID: 926
// Dependencies: [904, 906]
// Exports: onHidden

// Module 925
import _mod904 from "module_904" /* 904 */;

const require = globalThis.__r;
let _require;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const onHidden = (arg0) => {
  let closure_0;
  _require = arg0;
  function onHiddenOrPageHide(type) {
    let tmp = "pagehide" !== type.type;
    if (tmp) {
      const _document = _mod904.WINDOW.document;
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
  const obj = require("module_906");
  obj.addPageListener("visibilitychange", onHiddenOrPageHide, { capture: true, once: true });
  const obj2 = require("module_906");
  obj2.addPageListener("pagehide", onHiddenOrPageHide, { capture: true, once: true });
};
