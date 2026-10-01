// Module ID: 960
// Function ID: 961
// Name: registerBackgroundTabDetection
// Dependencies: [893, 682, 937]
// Exports: registerBackgroundTabDetection

// Module 960 (registerBackgroundTabDetection)
import _mod893 from "module_893" /* 893 */;

let tmp;
const _mod682 = tmp(682);
const _mod937 = tmp(937);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const registerBackgroundTabDetection = function registerBackgroundTabDetection() {
  const tmp = require;
  const tmp2 = dependencyMap;
  if (_mod893.WINDOW.document) {
    const _document = _mod893.WINDOW.document;
    const listener = _document.addEventListener("visibilitychange", () => {
      let op;
      let status;
      const obj = _mod682;
      const activeSpan = obj.getActiveSpan();
      if (activeSpan) {
        const tmpResult = _mod682;
        const rootSpan = tmpResult.getRootSpan(activeSpan);
        if (_mod893.WINDOW.document.hidden) {
          if (rootSpan) {
            const tmpResult2 = _mod682;
            ({ op, status } = tmpResult2.spanToJSON(rootSpan));
            tmpResult2.spanToJSON(rootSpan);
            if (_mod937.DEBUG_BUILD) {
              const debug = tmp(tmp2[1]).debug;
              const _HermesInternal = HermesInternal;
              debug.log("[Tracing] Transaction: " + "cancelled" + " -> since tab moved to the background, op: " + op);
            }
            if (!status) {
              const setStatus = rootSpan.setStatus;
              const obj2 = { code: _mod682.SPAN_STATUS_ERROR, message: "cancelled" };
              setStatus(obj2);
            }
            const attr = rootSpan.setAttribute("sentry.cancellation_reason", "document.hidden");
            rootSpan.end();
          }
        }
      }
    });
  } else if (_mod937.DEBUG_BUILD) {
    let debug = _mod682.debug;
    debug.warn("[Tracing] Could not set up background tab detection due to lack of global document");
  }
};
