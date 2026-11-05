// Module ID: 13277
// Function ID: 13278
// Dependencies: [13278, 13285, 13286, 13309, 13281, 13298]
// Exports: registerSpanErrorInstrumentation

// Module 13277
import _mod13278 from "module_13278" /* 13278 */;
import _mod13285 from "module_13285" /* 13285 */;
import _mod13286 from "module_13286" /* 13286 */;
import _mod13298 from "module_13298" /* 13298 */;
import _mod13309 from "module_13309" /* 13309 */;

function errorCallback() {
  const obj = _mod13286;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod13286;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod13309.DEBUG_BUILD) {
      const logger = tmp(13281).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod13298.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod13278;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod13285;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
