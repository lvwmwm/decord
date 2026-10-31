// Module ID: 13035
// Function ID: 13036
// Dependencies: [13036, 13043, 13044, 13067, 13039, 13056]
// Exports: registerSpanErrorInstrumentation

// Module 13035
import _mod13036 from "module_13036" /* 13036 */;
import _mod13043 from "module_13043" /* 13043 */;
import _mod13044 from "module_13044" /* 13044 */;
import _mod13056 from "module_13056" /* 13056 */;
import _mod13067 from "module_13067" /* 13067 */;

function errorCallback() {
  const obj = _mod13044;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod13044;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod13067.DEBUG_BUILD) {
      const logger = tmp(13039).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod13056.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod13036;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod13043;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
