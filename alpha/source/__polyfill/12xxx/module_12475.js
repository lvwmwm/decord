// Module ID: 12475
// Function ID: 12476
// Dependencies: [12476, 12483, 12484, 12507, 12479, 12496]
// Exports: registerSpanErrorInstrumentation

// Module 12475
import _mod12476 from "module_12476" /* 12476 */;
import _mod12483 from "module_12483" /* 12483 */;
import _mod12484 from "module_12484" /* 12484 */;
import _mod12496 from "module_12496" /* 12496 */;
import _mod12507 from "module_12507" /* 12507 */;

function errorCallback() {
  const obj = _mod12484;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12484;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12507.DEBUG_BUILD) {
      const logger = tmp(12479).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12496.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12476;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12483;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
