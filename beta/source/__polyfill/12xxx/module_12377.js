// Module ID: 12377
// Function ID: 12378
// Dependencies: [12378, 12385, 12386, 12409, 12381, 12398]
// Exports: registerSpanErrorInstrumentation

// Module 12377
import _mod12378 from "module_12378" /* 12378 */;
import _mod12385 from "module_12385" /* 12385 */;
import _mod12386 from "module_12386" /* 12386 */;
import _mod12398 from "module_12398" /* 12398 */;
import _mod12409 from "module_12409" /* 12409 */;

function errorCallback() {
  const obj = _mod12386;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12386;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12409.DEBUG_BUILD) {
      const logger = tmp(12381).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12398.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12378;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12385;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
