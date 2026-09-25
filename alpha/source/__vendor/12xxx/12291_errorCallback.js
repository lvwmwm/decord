// Module ID: 12291
// Function ID: 12292
// Name: errorCallback
// Dependencies: [12292, 12299, 12300, 12323, 12295, 12312]
// Exports: registerSpanErrorInstrumentation

// Module 12291 (errorCallback)
import _mod12292 from "module_12292" /* 12292 */;
import _mod12299 from "module_12299" /* 12299 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12300 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(12300).getRootSpan(activeSpan);
    const tmpResult = tmp(12300);
  }
  if (rootSpan) {
    if (tmp(12323).DEBUG_BUILD) {
      const logger = tmp(12295).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: tmp(12312).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12292.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12299.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
