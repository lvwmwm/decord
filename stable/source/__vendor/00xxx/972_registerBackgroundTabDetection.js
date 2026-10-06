// Module ID: 972
// Function ID: 973
// Name: registerBackgroundTabDetection
// Dependencies: [905, 694, 949]
// Exports: registerBackgroundTabDetection

// Module 972 (registerBackgroundTabDetection)
import _mod905 from "module_905" /* 905 */;

let tmp;
const _mod694 = tmp(694);
const _mod949 = tmp(949);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const registerBackgroundTabDetection = function registerBackgroundTabDetection() {
  const tmp = require;
  const tmp2 = dependencyMap;
  if (_mod905.WINDOW.document) {
    const _document = _mod905.WINDOW.document;
    const listener = _document.addEventListener("visibilitychange", () => {
      let op;
      let status;
      const obj = _mod694;
      const activeSpan = obj.getActiveSpan();
      if (activeSpan) {
        const tmpResult = _mod694;
        const rootSpan = tmpResult.getRootSpan(activeSpan);
        if (_mod905.WINDOW.document.hidden) {
          if (rootSpan) {
            const tmpResult2 = _mod694;
            ({ op, status } = tmpResult2.spanToJSON(rootSpan));
            tmpResult2.spanToJSON(rootSpan);
            if (_mod949.DEBUG_BUILD) {
              const debug = tmp(tmp2[1]).debug;
              const _HermesInternal = HermesInternal;
              debug.log("[Tracing] Transaction: " + "cancelled" + " -> since tab moved to the background, op: " + op);
            }
            if (!status) {
              const setStatus = rootSpan.setStatus;
              const obj2 = { code: _mod694.SPAN_STATUS_ERROR, message: "cancelled" };
              setStatus(obj2);
            }
            const attr = rootSpan.setAttribute("sentry.cancellation_reason", "document.hidden");
            rootSpan.end();
          }
        }
      }
    });
  } else if (_mod949.DEBUG_BUILD) {
    let debug = _mod694.debug;
    debug.warn("[Tracing] Could not set up background tab detection due to lack of global document");
  }
};
