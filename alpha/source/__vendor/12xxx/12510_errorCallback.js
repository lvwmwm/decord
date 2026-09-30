// Module ID: 12510
// Function ID: 12511
// Name: errorCallback
// Dependencies: [12511, 12518, 12519, 12542, 12514, 12531]
// Exports: registerSpanErrorInstrumentation

// Module 12510 (errorCallback)
import _mod12511 from "module_12511" /* 12511 */;
import _mod12518 from "module_12518" /* 12518 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12519 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(12519).getRootSpan(activeSpan);
    const tmpResult = tmp(12519);
  }
  if (rootSpan) {
    if (tmp(12542).DEBUG_BUILD) {
      const logger = tmp(12514).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: tmp(12531).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12511.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12518.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
