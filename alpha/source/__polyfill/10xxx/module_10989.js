// Module ID: 10989
// Function ID: 10990
// Dependencies: [10990, 10997, 10998, 11021, 10993, 11010]
// Exports: registerSpanErrorInstrumentation

// Module 10989
import _mod10990 from "module_10990" /* 10990 */;
import _mod10997 from "module_10997" /* 10997 */;
import _mod10998 from "module_10998" /* 10998 */;
import _mod11010 from "module_11010" /* 11010 */;
import _mod11021 from "module_11021" /* 11021 */;

function errorCallback() {
  const obj = _mod10998;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod10998;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod11021.DEBUG_BUILD) {
      const logger = tmp(10993).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod11010.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod10990;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod10997;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
