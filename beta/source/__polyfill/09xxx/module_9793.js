// Module ID: 9793
// Function ID: 9794
// Dependencies: [9794, 9801, 9802, 9825, 9797, 9814]
// Exports: registerSpanErrorInstrumentation

// Module 9793
import _mod9794 from "module_9794" /* 9794 */;
import _mod9801 from "module_9801" /* 9801 */;
import _mod9802 from "module_9802" /* 9802 */;
import _mod9814 from "module_9814" /* 9814 */;
import _mod9825 from "module_9825" /* 9825 */;

function errorCallback() {
  const obj = _mod9802;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod9802;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod9825.DEBUG_BUILD) {
      const logger = tmp(9797).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod9814.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod9794;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod9801;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
