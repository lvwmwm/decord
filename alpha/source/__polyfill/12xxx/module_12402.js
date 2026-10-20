// Module ID: 12402
// Function ID: 12403
// Dependencies: [12403, 12410, 12411, 12434, 12406, 12423]
// Exports: registerSpanErrorInstrumentation

// Module 12402
import _mod12403 from "module_12403" /* 12403 */;
import _mod12410 from "module_12410" /* 12410 */;
import _mod12411 from "module_12411" /* 12411 */;
import _mod12423 from "module_12423" /* 12423 */;
import _mod12434 from "module_12434" /* 12434 */;

function errorCallback() {
  const obj = _mod12411;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12411;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12434.DEBUG_BUILD) {
      const logger = tmp(12406).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12423.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12403;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12410;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
