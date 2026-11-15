// Module ID: 13305
// Function ID: 13306
// Dependencies: [13306, 13313, 13314, 13337, 13309, 13326]
// Exports: registerSpanErrorInstrumentation

// Module 13305
import _mod13306 from "module_13306" /* 13306 */;
import _mod13313 from "module_13313" /* 13313 */;
import _mod13314 from "module_13314" /* 13314 */;
import _mod13326 from "module_13326" /* 13326 */;
import _mod13337 from "module_13337" /* 13337 */;

function errorCallback() {
  const obj = _mod13314;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod13314;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod13337.DEBUG_BUILD) {
      const logger = tmp(13309).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod13326.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod13306;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod13313;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
