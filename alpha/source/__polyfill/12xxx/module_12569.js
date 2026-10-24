// Module ID: 12569
// Function ID: 12570
// Dependencies: [12570, 12577, 12578, 12601, 12573, 12590]
// Exports: registerSpanErrorInstrumentation

// Module 12569
import _mod12570 from "module_12570" /* 12570 */;
import _mod12577 from "module_12577" /* 12577 */;
import _mod12578 from "module_12578" /* 12578 */;
import _mod12590 from "module_12590" /* 12590 */;
import _mod12601 from "module_12601" /* 12601 */;

function errorCallback() {
  const obj = _mod12578;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12578;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12601.DEBUG_BUILD) {
      const logger = tmp(12573).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12590.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12570;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12577;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
