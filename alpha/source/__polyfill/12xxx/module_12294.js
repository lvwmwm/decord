// Module ID: 12294
// Function ID: 12295
// Dependencies: [12295, 12302, 12303, 12326, 12298, 12315]
// Exports: registerSpanErrorInstrumentation

// Module 12294
import _mod12295 from "module_12295" /* 12295 */;
import _mod12302 from "module_12302" /* 12302 */;
import _mod12303 from "module_12303" /* 12303 */;
import _mod12315 from "module_12315" /* 12315 */;
import _mod12326 from "module_12326" /* 12326 */;

function errorCallback() {
  const obj = _mod12303;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12303;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12326.DEBUG_BUILD) {
      const logger = tmp(12298).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12315.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12295;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12302;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
