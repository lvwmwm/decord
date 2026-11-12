// Module ID: 9726
// Function ID: 9727
// Dependencies: [9727, 9734, 9735, 9758, 9730, 9747]
// Exports: registerSpanErrorInstrumentation

// Module 9726
import _mod9727 from "module_9727" /* 9727 */;
import _mod9734 from "module_9734" /* 9734 */;
import _mod9735 from "module_9735" /* 9735 */;
import _mod9747 from "module_9747" /* 9747 */;
import _mod9758 from "module_9758" /* 9758 */;

function errorCallback() {
  const obj = _mod9735;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod9735;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod9758.DEBUG_BUILD) {
      const logger = tmp(9730).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod9747.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod9727;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod9734;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
