// Module ID: 12849
// Function ID: 12850
// Dependencies: [12850, 12857, 12858, 12881, 12853, 12870]
// Exports: registerSpanErrorInstrumentation

// Module 12849
import _mod12850 from "module_12850" /* 12850 */;
import _mod12857 from "module_12857" /* 12857 */;
import _mod12858 from "module_12858" /* 12858 */;
import _mod12870 from "module_12870" /* 12870 */;
import _mod12881 from "module_12881" /* 12881 */;

function errorCallback() {
  const obj = _mod12858;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12858;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12881.DEBUG_BUILD) {
      const logger = tmp(12853).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12870.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12850;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12857;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
