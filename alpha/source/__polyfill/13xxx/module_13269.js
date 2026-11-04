// Module ID: 13269
// Function ID: 13270
// Dependencies: [13270, 13277, 13278, 13301, 13273, 13290]
// Exports: registerSpanErrorInstrumentation

// Module 13269
import _mod13270 from "module_13270" /* 13270 */;
import _mod13277 from "module_13277" /* 13277 */;
import _mod13278 from "module_13278" /* 13278 */;
import _mod13290 from "module_13290" /* 13290 */;
import _mod13301 from "module_13301" /* 13301 */;

function errorCallback() {
  const obj = _mod13278;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod13278;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod13301.DEBUG_BUILD) {
      const logger = tmp(13273).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod13290.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod13270;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod13277;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
