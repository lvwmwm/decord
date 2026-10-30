// Module ID: 957
// Function ID: 958
// Name: registerBackgroundTabDetection
// Dependencies: [890, 681, 934]
// Exports: registerBackgroundTabDetection

// Module 957 (registerBackgroundTabDetection)
import _mod890 from "module_890" /* 890 */;

let tmp;
const _mod681 = tmp(681);
const _mod934 = tmp(934);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function registerBackgroundTabDetection() {
  const tmp = require;
  const tmp2 = dependencyMap;
  if (_mod890.WINDOW.document) {
    const _document = _mod890.WINDOW.document;
    const listener = _document.addEventListener("visibilitychange", () => {
      let op;
      let status;
      const obj = _mod681;
      const activeSpan = obj.getActiveSpan();
      if (activeSpan) {
        const tmpResult = _mod681;
        const rootSpan = tmpResult.getRootSpan(activeSpan);
        if (_mod890.WINDOW.document.hidden) {
          if (rootSpan) {
            const tmpResult2 = _mod681;
            ({ op, status } = tmpResult2.spanToJSON(rootSpan));
            tmpResult2.spanToJSON(rootSpan);
            if (_mod934.DEBUG_BUILD) {
              const debug = tmp(tmp2[1]).debug;
              const _HermesInternal = HermesInternal;
              debug.log("[Tracing] Transaction: " + "cancelled" + " -> since tab moved to the background, op: " + op);
            }
            if (!status) {
              const setStatus = rootSpan.setStatus;
              const obj2 = { code: _mod681.SPAN_STATUS_ERROR, message: "cancelled" };
              setStatus(obj2);
            }
            const attr = rootSpan.setAttribute("sentry.cancellation_reason", "document.hidden");
            rootSpan.end();
          }
        }
      }
    });
  } else if (_mod934.DEBUG_BUILD) {
    let debug = _mod681.debug;
    debug.warn("[Tracing] Could not set up background tab detection due to lack of global document");
  }
}
