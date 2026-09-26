// Module ID: 12309
// Function ID: 12310
// Name: errorCallback
// Dependencies: [12310, 12317, 12318, 12341, 12313, 12330]
// Exports: registerSpanErrorInstrumentation

// Module 12309 (errorCallback)
import _mod12310 from "module_12310" /* 12310 */;
import _mod12317 from "module_12317" /* 12317 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12318 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(12318).getRootSpan(activeSpan);
    const tmpResult = tmp(12318);
  }
  if (rootSpan) {
    if (tmp(12341).DEBUG_BUILD) {
      const logger = tmp(12313).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: tmp(12330).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12310.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12317.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
