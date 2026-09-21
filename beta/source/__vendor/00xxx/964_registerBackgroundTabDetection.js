// Module ID: 964
// Function ID: 965
// Name: registerBackgroundTabDetection
// Dependencies: [897, 686, 941]
// Exports: registerBackgroundTabDetection

// Module 964 (registerBackgroundTabDetection)
import _mod686 from "module_686" /* 686 */;
import ignoreNextOnError from "ignoreNextOnError" /* 897 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const registerBackgroundTabDetection = function registerBackgroundTabDetection() {
  if (ignoreNextOnError.WINDOW.document) {
    const _document = tmp(897).WINDOW.document;
    const listener = _document.addEventListener("visibilitychange", () => {
      const activeSpan = _mod686.getActiveSpan();
      if (activeSpan) {
        const rootSpan = tmp(tmp2[1]).getRootSpan(activeSpan);
        if (tmp(tmp2[0]).WINDOW.document.hidden) {
          if (rootSpan) {
            const tmpResult2 = tmp(tmp2[1]);
            ({ op, status } = tmp(tmp2[1]).spanToJSON(rootSpan));
            if (tmp(tmp2[2]).DEBUG_BUILD) {
              const debug = tmp(tmp2[1]).debug;
              const _HermesInternal = HermesInternal;
              debug.log("[Tracing] Transaction: " + "cancelled" + " -> since tab moved to the background, op: " + op);
            }
            if (!status) {
              const obj2 = { code: tmp(tmp2[1]).SPAN_STATUS_ERROR, message: "cancelled" };
              rootSpan.setStatus(obj2);
            }
            const attr = rootSpan.setAttribute("sentry.cancellation_reason", "document.hidden");
            rootSpan.end();
            const spanToJSONResult = tmp(tmp2[1]).spanToJSON(rootSpan);
          }
        }
        const tmpResult = tmp(tmp2[1]);
      }
    });
  } else if (tmp(941).DEBUG_BUILD) {
    let debug = tmp(686).debug;
    debug.warn("[Tracing] Could not set up background tab detection due to lack of global document");
  }
};
