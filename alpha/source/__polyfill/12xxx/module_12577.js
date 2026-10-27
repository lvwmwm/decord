// Module ID: 12577
// Function ID: 12578
// Dependencies: [12578, 12585, 12586, 12609, 12581, 12598]
// Exports: registerSpanErrorInstrumentation

// Module 12577
import _mod12578 from "module_12578" /* 12578 */;
import _mod12585 from "module_12585" /* 12585 */;
import _mod12586 from "module_12586" /* 12586 */;
import _mod12598 from "module_12598" /* 12598 */;
import _mod12609 from "module_12609" /* 12609 */;

function errorCallback() {
  const obj = _mod12586;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12586;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12609.DEBUG_BUILD) {
      const logger = tmp(12581).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12598.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12578;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12585;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
