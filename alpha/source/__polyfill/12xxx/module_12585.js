// Module ID: 12585
// Function ID: 12586
// Dependencies: [12586, 12593, 12594, 12617, 12589, 12606]
// Exports: registerSpanErrorInstrumentation

// Module 12585
import _mod12586 from "module_12586" /* 12586 */;
import _mod12593 from "module_12593" /* 12593 */;
import _mod12594 from "module_12594" /* 12594 */;
import _mod12606 from "module_12606" /* 12606 */;
import _mod12617 from "module_12617" /* 12617 */;

function errorCallback() {
  const obj = _mod12594;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12594;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12617.DEBUG_BUILD) {
      const logger = tmp(12589).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12606.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12586;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12593;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
