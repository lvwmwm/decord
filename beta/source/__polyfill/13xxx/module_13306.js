// Module ID: 13306
// Function ID: 13307
// Dependencies: [13307, 13314, 13315, 13338, 13310, 13327]
// Exports: registerSpanErrorInstrumentation

// Module 13306
import _mod13307 from "module_13307" /* 13307 */;
import _mod13314 from "module_13314" /* 13314 */;
import _mod13315 from "module_13315" /* 13315 */;
import _mod13327 from "module_13327" /* 13327 */;
import _mod13338 from "module_13338" /* 13338 */;

function errorCallback() {
  const obj = _mod13315;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod13315;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod13338.DEBUG_BUILD) {
      const logger = tmp(13310).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod13327.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod13307;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod13314;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
