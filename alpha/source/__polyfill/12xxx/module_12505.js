// Module ID: 12505
// Function ID: 12506
// Dependencies: [12506, 12513, 12514, 12537, 12509, 12526]
// Exports: registerSpanErrorInstrumentation

// Module 12505
import _mod12506 from "module_12506" /* 12506 */;
import _mod12513 from "module_12513" /* 12513 */;
import _mod12514 from "module_12514" /* 12514 */;
import _mod12526 from "module_12526" /* 12526 */;
import _mod12537 from "module_12537" /* 12537 */;

function errorCallback() {
  const obj = _mod12514;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12514;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12537.DEBUG_BUILD) {
      const logger = tmp(12509).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12526.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12506;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12513;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
