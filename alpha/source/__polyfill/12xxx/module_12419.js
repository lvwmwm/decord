// Module ID: 12419
// Function ID: 12420
// Dependencies: [12420, 12427, 12428, 12451, 12423, 12440]
// Exports: registerSpanErrorInstrumentation

// Module 12419
import _mod12420 from "module_12420" /* 12420 */;
import _mod12427 from "module_12427" /* 12427 */;
import _mod12428 from "module_12428" /* 12428 */;
import _mod12440 from "module_12440" /* 12440 */;
import _mod12451 from "module_12451" /* 12451 */;

function errorCallback() {
  const obj = _mod12428;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12428;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12451.DEBUG_BUILD) {
      const logger = tmp(12423).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12440.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12420;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12427;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
