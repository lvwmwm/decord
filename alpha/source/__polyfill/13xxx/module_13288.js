// Module ID: 13288
// Function ID: 13289
// Dependencies: [13289, 13296, 13297, 13320, 13292, 13309]
// Exports: registerSpanErrorInstrumentation

// Module 13288
import _mod13289 from "module_13289" /* 13289 */;
import _mod13296 from "module_13296" /* 13296 */;
import _mod13297 from "module_13297" /* 13297 */;
import _mod13309 from "module_13309" /* 13309 */;
import _mod13320 from "module_13320" /* 13320 */;

function errorCallback() {
  const obj = _mod13297;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod13297;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod13320.DEBUG_BUILD) {
      const logger = tmp(13292).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod13309.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod13289;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod13296;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
