// Module ID: 11206
// Function ID: 11207
// Dependencies: [11207, 11214, 11215, 11238, 11210, 11227]
// Exports: registerSpanErrorInstrumentation

// Module 11206
import _mod11207 from "module_11207" /* 11207 */;
import _mod11214 from "module_11214" /* 11214 */;
import _mod11215 from "module_11215" /* 11215 */;
import _mod11227 from "module_11227" /* 11227 */;
import _mod11238 from "module_11238" /* 11238 */;

function errorCallback() {
  const obj = _mod11215;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod11215;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod11238.DEBUG_BUILD) {
      const logger = tmp(11210).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod11227.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod11207;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod11214;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
