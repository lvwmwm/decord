// Module ID: 12480
// Function ID: 12481
// Name: errorCallback
// Dependencies: [12481, 12488, 12489, 12512, 12484, 12501]
// Exports: registerSpanErrorInstrumentation

// Module 12480 (errorCallback)
import _mod12481 from "module_12481" /* 12481 */;
import _mod12488 from "module_12488" /* 12488 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12489 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(12489).getRootSpan(activeSpan);
    const tmpResult = tmp(12489);
  }
  if (rootSpan) {
    if (tmp(12512).DEBUG_BUILD) {
      const logger = tmp(12484).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: tmp(12501).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12481.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12488.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
