// Module ID: 13251
// Function ID: 13252
// Dependencies: [13252, 13259, 13260, 13283, 13255, 13272]
// Exports: registerSpanErrorInstrumentation

// Module 13251
import _mod13252 from "module_13252" /* 13252 */;
import _mod13259 from "module_13259" /* 13259 */;
import _mod13260 from "module_13260" /* 13260 */;
import _mod13272 from "module_13272" /* 13272 */;
import _mod13283 from "module_13283" /* 13283 */;

function errorCallback() {
  const obj = _mod13260;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod13260;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod13283.DEBUG_BUILD) {
      const logger = tmp(13255).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod13272.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod13252;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod13259;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
