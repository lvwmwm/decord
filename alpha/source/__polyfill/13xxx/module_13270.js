// Module ID: 13270
// Function ID: 13271
// Dependencies: [13271, 13278, 13279, 13302, 13274, 13291]
// Exports: registerSpanErrorInstrumentation

// Module 13270
import _mod13271 from "module_13271" /* 13271 */;
import _mod13278 from "module_13278" /* 13278 */;
import _mod13279 from "module_13279" /* 13279 */;
import _mod13291 from "module_13291" /* 13291 */;
import _mod13302 from "module_13302" /* 13302 */;

function errorCallback() {
  const obj = _mod13279;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod13279;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod13302.DEBUG_BUILD) {
      const logger = tmp(13274).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod13291.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod13271;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod13278;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
