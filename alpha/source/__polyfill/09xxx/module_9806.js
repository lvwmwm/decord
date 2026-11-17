// Module ID: 9806
// Function ID: 9807
// Dependencies: [9807, 9814, 9815, 9838, 9810, 9827]
// Exports: registerSpanErrorInstrumentation

// Module 9806
import _mod9807 from "module_9807" /* 9807 */;
import _mod9814 from "module_9814" /* 9814 */;
import _mod9815 from "module_9815" /* 9815 */;
import _mod9827 from "module_9827" /* 9827 */;
import _mod9838 from "module_9838" /* 9838 */;

function errorCallback() {
  const obj = _mod9815;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod9815;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod9838.DEBUG_BUILD) {
      const logger = tmp(9810).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod9827.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod9807;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod9814;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
