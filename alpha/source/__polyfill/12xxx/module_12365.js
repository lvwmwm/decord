// Module ID: 12365
// Function ID: 12366
// Dependencies: [12366, 12373, 12374, 12397, 12369, 12386]
// Exports: registerSpanErrorInstrumentation

// Module 12365
import _mod12366 from "module_12366" /* 12366 */;
import _mod12373 from "module_12373" /* 12373 */;
import _mod12374 from "module_12374" /* 12374 */;
import _mod12386 from "module_12386" /* 12386 */;
import _mod12397 from "module_12397" /* 12397 */;

function errorCallback() {
  const obj = _mod12374;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12374;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12397.DEBUG_BUILD) {
      const logger = tmp(12369).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12386.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12366;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12373;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
