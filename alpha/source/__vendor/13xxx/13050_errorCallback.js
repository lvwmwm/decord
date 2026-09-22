// Module ID: 13050
// Function ID: 13051
// Name: errorCallback
// Dependencies: [13051, 13058, 13059, 13082, 13054, 13071]
// Exports: registerSpanErrorInstrumentation

// Module 13050 (errorCallback)
import _mod13051 from "module_13051" /* 13051 */;
import _mod13058 from "module_13058" /* 13058 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13059 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(13059).getRootSpan(activeSpan);
    const tmpResult = tmp(13059);
  }
  if (rootSpan) {
    if (tmp(13082).DEBUG_BUILD) {
      const logger = tmp(13054).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: tmp(13071).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13051.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13058.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
