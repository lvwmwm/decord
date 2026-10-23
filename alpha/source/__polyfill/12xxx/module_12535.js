// Module ID: 12535
// Function ID: 12536
// Dependencies: [12536, 12543, 12544, 12567, 12539, 12556]
// Exports: registerSpanErrorInstrumentation

// Module 12535
import _mod12536 from "module_12536" /* 12536 */;
import _mod12543 from "module_12543" /* 12543 */;
import _mod12544 from "module_12544" /* 12544 */;
import _mod12556 from "module_12556" /* 12556 */;
import _mod12567 from "module_12567" /* 12567 */;

function errorCallback() {
  const obj = _mod12544;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12544;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12567.DEBUG_BUILD) {
      const logger = tmp(12539).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12556.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12536;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12543;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
