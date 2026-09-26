// Module ID: 960
// Function ID: 961
// Name: registerBackgroundTabDetection
// Dependencies: [893, 682, 937]
// Exports: registerBackgroundTabDetection

// Module 960 (registerBackgroundTabDetection)
import _mod682 from "module_682" /* 682 */;
import ignoreNextOnError from "ignoreNextOnError" /* 893 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const registerBackgroundTabDetection = function registerBackgroundTabDetection() {
  if (ignoreNextOnError.WINDOW.document) {
    const _document = tmp(893).WINDOW.document;
    const listener = _document.addEventListener("visibilitychange", () => {
      const activeSpan = _mod682.getActiveSpan();
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
  } else if (tmp(937).DEBUG_BUILD) {
    let debug = tmp(682).debug;
    debug.warn("[Tracing] Could not set up background tab detection due to lack of global document");
  }
};
