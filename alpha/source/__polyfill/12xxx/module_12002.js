// Module ID: 12002
// Function ID: 12003
// Dependencies: [12003, 12010, 12011, 12034, 12006, 12023]
// Exports: registerSpanErrorInstrumentation

// Module 12002
import _mod12003 from "module_12003" /* 12003 */;
import _mod12010 from "module_12010" /* 12010 */;
import _mod12011 from "module_12011" /* 12011 */;
import _mod12023 from "module_12023" /* 12023 */;
import _mod12034 from "module_12034" /* 12034 */;

function errorCallback() {
  const obj = _mod12011;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12011;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12034.DEBUG_BUILD) {
      const logger = tmp(12006).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12023.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12003;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12010;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
