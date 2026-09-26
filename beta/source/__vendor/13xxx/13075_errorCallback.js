// Module ID: 13075
// Function ID: 13076
// Name: errorCallback
// Dependencies: [13076, 13083, 13084, 13107, 13079, 13096]
// Exports: registerSpanErrorInstrumentation

// Module 13075 (errorCallback)
import _mod13076 from "module_13076" /* 13076 */;
import _mod13083 from "module_13083" /* 13083 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13084 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(13084).getRootSpan(activeSpan);
    const tmpResult = tmp(13084);
  }
  if (rootSpan) {
    if (tmp(13107).DEBUG_BUILD) {
      const logger = tmp(13079).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: tmp(13096).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13076.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13083.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
