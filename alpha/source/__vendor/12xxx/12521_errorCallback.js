// Module ID: 12521
// Function ID: 12522
// Name: errorCallback
// Dependencies: [12522, 12529, 12530, 12553, 12525, 12542]
// Exports: registerSpanErrorInstrumentation

// Module 12521 (errorCallback)
import _mod12522 from "module_12522" /* 12522 */;
import _mod12529 from "module_12529" /* 12529 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12530 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(12530).getRootSpan(activeSpan);
    const tmpResult = tmp(12530);
  }
  if (rootSpan) {
    if (tmp(12553).DEBUG_BUILD) {
      const logger = tmp(12525).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: tmp(12542).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12522.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12529.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
