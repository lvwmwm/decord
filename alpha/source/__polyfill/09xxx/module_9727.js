// Module ID: 9727
// Function ID: 9728
// Dependencies: [9728, 9735, 9736, 9759, 9731, 9748]
// Exports: registerSpanErrorInstrumentation

// Module 9727
import _mod9728 from "module_9728" /* 9728 */;
import _mod9735 from "module_9735" /* 9735 */;
import _mod9736 from "module_9736" /* 9736 */;
import _mod9748 from "module_9748" /* 9748 */;
import _mod9759 from "module_9759" /* 9759 */;

function errorCallback() {
  const obj = _mod9736;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod9736;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod9759.DEBUG_BUILD) {
      const logger = tmp(9731).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod9748.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod9728;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod9735;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
