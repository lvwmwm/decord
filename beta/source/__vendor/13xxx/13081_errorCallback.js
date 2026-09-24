// Module ID: 13081
// Function ID: 13082
// Name: errorCallback
// Dependencies: [13082, 13089, 13090, 13113, 13085, 13102]
// Exports: registerSpanErrorInstrumentation

// Module 13081 (errorCallback)
import _mod13082 from "module_13082" /* 13082 */;
import _mod13089 from "module_13089" /* 13089 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13090 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(13090).getRootSpan(activeSpan);
    const tmpResult = tmp(13090);
  }
  if (rootSpan) {
    if (tmp(13113).DEBUG_BUILD) {
      const logger = tmp(13085).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: tmp(13102).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13082.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13089.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
