// Module ID: 969
// Function ID: 970
// Name: registerBackgroundTabDetection
// Dependencies: [902, 693, 946]
// Exports: registerBackgroundTabDetection

// Module 969 (registerBackgroundTabDetection)
import _mod902 from "module_902" /* 902 */;

let tmp;
const _mod693 = tmp(693);
const _mod946 = tmp(946);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const registerBackgroundTabDetection = function registerBackgroundTabDetection() {
  const tmp = require;
  const tmp2 = dependencyMap;
  if (_mod902.WINDOW.document) {
    const _document = _mod902.WINDOW.document;
    const listener = _document.addEventListener("visibilitychange", () => {
      let op;
      let status;
      const obj = _mod693;
      const activeSpan = obj.getActiveSpan();
      if (activeSpan) {
        const tmpResult = _mod693;
        const rootSpan = tmpResult.getRootSpan(activeSpan);
        if (_mod902.WINDOW.document.hidden) {
          if (rootSpan) {
            const tmpResult2 = _mod693;
            ({ op, status } = tmpResult2.spanToJSON(rootSpan));
            tmpResult2.spanToJSON(rootSpan);
            if (_mod946.DEBUG_BUILD) {
              const debug = tmp(tmp2[1]).debug;
              const _HermesInternal = HermesInternal;
              debug.log("[Tracing] Transaction: " + "cancelled" + " -> since tab moved to the background, op: " + op);
            }
            if (!status) {
              const setStatus = rootSpan.setStatus;
              const obj2 = { code: _mod693.SPAN_STATUS_ERROR, message: "cancelled" };
              setStatus(obj2);
            }
            const attr = rootSpan.setAttribute("sentry.cancellation_reason", "document.hidden");
            rootSpan.end();
          }
        }
      }
    });
  } else if (_mod946.DEBUG_BUILD) {
    let debug = _mod693.debug;
    debug.warn("[Tracing] Could not set up background tab detection due to lack of global document");
  }
};
