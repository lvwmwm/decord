// Module ID: 12574
// Function ID: 12575
// Dependencies: [12575, 12582, 12583, 12606, 12578, 12595]
// Exports: registerSpanErrorInstrumentation

// Module 12574
import _mod12575 from "module_12575" /* 12575 */;
import _mod12582 from "module_12582" /* 12582 */;
import _mod12583 from "module_12583" /* 12583 */;
import _mod12595 from "module_12595" /* 12595 */;
import _mod12606 from "module_12606" /* 12606 */;

function errorCallback() {
  const obj = _mod12583;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12583;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12606.DEBUG_BUILD) {
      const logger = tmp(12578).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12595.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12575;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12582;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
