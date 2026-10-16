// Module ID: 12300
// Function ID: 12301
// Dependencies: [12301, 12308, 12309, 12332, 12304, 12321]
// Exports: registerSpanErrorInstrumentation

// Module 12300
import _mod12301 from "module_12301" /* 12301 */;
import _mod12308 from "module_12308" /* 12308 */;
import _mod12309 from "module_12309" /* 12309 */;
import _mod12321 from "module_12321" /* 12321 */;
import _mod12332 from "module_12332" /* 12332 */;

function errorCallback() {
  const obj = _mod12309;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12309;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12332.DEBUG_BUILD) {
      const logger = tmp(12304).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12321.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12301;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12308;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
