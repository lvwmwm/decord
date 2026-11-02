// Module ID: 13050
// Function ID: 13051
// Dependencies: [13051, 13058, 13059, 13082, 13054, 13071]
// Exports: registerSpanErrorInstrumentation

// Module 13050
import _mod13051 from "module_13051" /* 13051 */;
import _mod13058 from "module_13058" /* 13058 */;
import _mod13059 from "module_13059" /* 13059 */;
import _mod13071 from "module_13071" /* 13071 */;
import _mod13082 from "module_13082" /* 13082 */;

function errorCallback() {
  const obj = _mod13059;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod13059;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod13082.DEBUG_BUILD) {
      const logger = tmp(13054).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod13071.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod13051;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod13058;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
