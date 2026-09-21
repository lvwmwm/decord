// Module ID: 13046
// Function ID: 13047
// Name: errorCallback
// Dependencies: [13047, 13054, 13055, 13078, 13050, 13067]
// Exports: registerSpanErrorInstrumentation

// Module 13046 (errorCallback)
import _mod13047 from "module_13047" /* 13047 */;
import _mod13054 from "module_13054" /* 13054 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13055 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(13055).getRootSpan(activeSpan);
    const tmpResult = tmp(13055);
  }
  if (rootSpan) {
    if (tmp(13078).DEBUG_BUILD) {
      const logger = tmp(13050).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: tmp(13067).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13047.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13054.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
