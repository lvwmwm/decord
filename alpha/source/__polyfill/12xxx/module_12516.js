// Module ID: 12516
// Function ID: 12517
// Dependencies: [12517, 12524, 12525, 12548, 12520, 12537]
// Exports: registerSpanErrorInstrumentation

// Module 12516
import _mod12517 from "module_12517" /* 12517 */;
import _mod12524 from "module_12524" /* 12524 */;
import _mod12525 from "module_12525" /* 12525 */;
import _mod12537 from "module_12537" /* 12537 */;
import _mod12548 from "module_12548" /* 12548 */;

function errorCallback() {
  const obj = _mod12525;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12525;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12548.DEBUG_BUILD) {
      const logger = tmp(12520).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12537.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12517;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12524;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
