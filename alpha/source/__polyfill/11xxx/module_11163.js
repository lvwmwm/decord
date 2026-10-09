// Module ID: 11163
// Function ID: 11164
// Dependencies: [11164, 11171, 11172, 11195, 11167, 11184]
// Exports: registerSpanErrorInstrumentation

// Module 11163
import _mod11164 from "module_11164" /* 11164 */;
import _mod11171 from "module_11171" /* 11171 */;
import _mod11172 from "module_11172" /* 11172 */;
import _mod11184 from "module_11184" /* 11184 */;
import _mod11195 from "module_11195" /* 11195 */;

function errorCallback() {
  const obj = _mod11172;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod11172;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod11195.DEBUG_BUILD) {
      const logger = tmp(11167).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod11184.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod11164;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod11171;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
