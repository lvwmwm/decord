// Module ID: 13141
// Function ID: 13142
// Name: errorCallback
// Dependencies: [13142, 13149, 13150, 13173, 13145, 13162]
// Exports: registerSpanErrorInstrumentation

// Module 13141 (errorCallback)
import _mod13142 from "module_13142" /* 13142 */;
import _mod13149 from "module_13149" /* 13149 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13150 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(13150).getRootSpan(activeSpan);
    const tmpResult = tmp(13150);
  }
  if (rootSpan) {
    if (tmp(13173).DEBUG_BUILD) {
      const logger = tmp(13145).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: tmp(13162).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13142.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13149.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
