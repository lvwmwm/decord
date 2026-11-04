// Module ID: 12607
// Function ID: 12608
// Dependencies: [12608, 12615, 12616, 12639, 12611, 12628]
// Exports: registerSpanErrorInstrumentation

// Module 12607
import _mod12608 from "module_12608" /* 12608 */;
import _mod12615 from "module_12615" /* 12615 */;
import _mod12616 from "module_12616" /* 12616 */;
import _mod12628 from "module_12628" /* 12628 */;
import _mod12639 from "module_12639" /* 12639 */;

function errorCallback() {
  const obj = _mod12616;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12616;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12639.DEBUG_BUILD) {
      const logger = tmp(12611).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12628.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12608;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12615;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
