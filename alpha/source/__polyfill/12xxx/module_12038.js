// Module ID: 12038
// Function ID: 12039
// Dependencies: [12039, 12046, 12047, 12070, 12042, 12059]
// Exports: registerSpanErrorInstrumentation

// Module 12038
import _mod12039 from "module_12039" /* 12039 */;
import _mod12046 from "module_12046" /* 12046 */;
import _mod12047 from "module_12047" /* 12047 */;
import _mod12059 from "module_12059" /* 12059 */;
import _mod12070 from "module_12070" /* 12070 */;

function errorCallback() {
  const obj = _mod12047;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12047;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12070.DEBUG_BUILD) {
      const logger = tmp(12042).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12059.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12039;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12046;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
