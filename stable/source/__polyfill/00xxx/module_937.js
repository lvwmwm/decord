// Module ID: 937
// Function ID: 938
// Dependencies: [916, 918]
// Exports: onHidden

// Module 937
import _mod916 from "module_916" /* 916 */;

const require = globalThis.__r;
let _require;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const onHidden = (arg0) => {
  let closure_0;
  _require = arg0;
  function onHiddenOrPageHide(type) {
    let tmp = "pagehide" !== type.type;
    if (tmp) {
      const _document = _mod916.WINDOW.document;
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
  const obj = require("module_918");
  obj.addPageListener("visibilitychange", onHiddenOrPageHide, { capture: true, once: true });
  const obj2 = require("module_918");
  obj2.addPageListener("pagehide", onHiddenOrPageHide, { capture: true, once: true });
};
