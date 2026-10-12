// Module ID: 11204
// Function ID: 11205
// Dependencies: [11205, 11212, 11213, 11236, 11208, 11225]
// Exports: registerSpanErrorInstrumentation

// Module 11204
import _mod11205 from "module_11205" /* 11205 */;
import _mod11212 from "module_11212" /* 11212 */;
import _mod11213 from "module_11213" /* 11213 */;
import _mod11225 from "module_11225" /* 11225 */;
import _mod11236 from "module_11236" /* 11236 */;

function errorCallback() {
  const obj = _mod11213;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod11213;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod11236.DEBUG_BUILD) {
      const logger = tmp(11208).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod11225.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod11205;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod11212;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
