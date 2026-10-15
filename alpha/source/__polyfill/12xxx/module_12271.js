// Module ID: 12271
// Function ID: 12272
// Dependencies: [12272, 12279, 12280, 12303, 12275, 12292]
// Exports: registerSpanErrorInstrumentation

// Module 12271
import _mod12272 from "module_12272" /* 12272 */;
import _mod12279 from "module_12279" /* 12279 */;
import _mod12280 from "module_12280" /* 12280 */;
import _mod12292 from "module_12292" /* 12292 */;
import _mod12303 from "module_12303" /* 12303 */;

function errorCallback() {
  const obj = _mod12280;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12280;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12303.DEBUG_BUILD) {
      const logger = tmp(12275).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12292.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12272;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12279;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
