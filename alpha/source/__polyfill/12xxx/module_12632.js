// Module ID: 12632
// Function ID: 12633
// Dependencies: [12633, 12640, 12641, 12664, 12636, 12653]
// Exports: registerSpanErrorInstrumentation

// Module 12632
import _mod12633 from "module_12633" /* 12633 */;
import _mod12640 from "module_12640" /* 12640 */;
import _mod12641 from "module_12641" /* 12641 */;
import _mod12653 from "module_12653" /* 12653 */;
import _mod12664 from "module_12664" /* 12664 */;

function errorCallback() {
  const obj = _mod12641;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12641;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12664.DEBUG_BUILD) {
      const logger = tmp(12636).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12653.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12633;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12640;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
