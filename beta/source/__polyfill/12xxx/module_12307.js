// Module ID: 12307
// Function ID: 12308
// Dependencies: [12308, 12315, 12316, 12339, 12311, 12328]
// Exports: registerSpanErrorInstrumentation

// Module 12307
import _mod12308 from "module_12308" /* 12308 */;
import _mod12315 from "module_12315" /* 12315 */;
import _mod12316 from "module_12316" /* 12316 */;
import _mod12328 from "module_12328" /* 12328 */;
import _mod12339 from "module_12339" /* 12339 */;

function errorCallback() {
  const obj = _mod12316;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12316;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12339.DEBUG_BUILD) {
      const logger = tmp(12311).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12328.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12308;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12315;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
