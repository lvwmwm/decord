// Module ID: 13186
// Function ID: 13187
// Dependencies: [13187, 13194, 13195, 13218, 13190, 13207]
// Exports: registerSpanErrorInstrumentation

// Module 13186
import _mod13187 from "module_13187" /* 13187 */;
import _mod13194 from "module_13194" /* 13194 */;
import _mod13195 from "module_13195" /* 13195 */;
import _mod13207 from "module_13207" /* 13207 */;
import _mod13218 from "module_13218" /* 13218 */;

function errorCallback() {
  const obj = _mod13195;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod13195;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod13218.DEBUG_BUILD) {
      const logger = tmp(13190).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod13207.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod13187;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod13194;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
