// Module ID: 12575
// Function ID: 12576
// Dependencies: [12576, 12583, 12584, 12607, 12579, 12596]
// Exports: registerSpanErrorInstrumentation

// Module 12575
import _mod12576 from "module_12576" /* 12576 */;
import _mod12583 from "module_12583" /* 12583 */;
import _mod12584 from "module_12584" /* 12584 */;
import _mod12596 from "module_12596" /* 12596 */;
import _mod12607 from "module_12607" /* 12607 */;

function errorCallback() {
  const obj = _mod12584;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12584;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12607.DEBUG_BUILD) {
      const logger = tmp(12579).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12596.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12576;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12583;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
