// Module ID: 13132
// Function ID: 13133
// Name: errorCallback
// Dependencies: [13133, 13140, 13141, 13164, 13136, 13153]
// Exports: registerSpanErrorInstrumentation

// Module 13132 (errorCallback)
import _mod13133 from "module_13133" /* 13133 */;
import _mod13140 from "module_13140" /* 13140 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13141 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(13141).getRootSpan(activeSpan);
    const tmpResult = tmp(13141);
  }
  if (rootSpan) {
    if (tmp(13164).DEBUG_BUILD) {
      const logger = tmp(13136).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: tmp(13153).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13133.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13140.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
