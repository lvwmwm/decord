// Module ID: 12382
// Function ID: 12383
// Dependencies: [12383, 12390, 12391, 12414, 12386, 12403]
// Exports: registerSpanErrorInstrumentation

// Module 12382
import _mod12383 from "module_12383" /* 12383 */;
import _mod12390 from "module_12390" /* 12390 */;
import _mod12391 from "module_12391" /* 12391 */;
import _mod12403 from "module_12403" /* 12403 */;
import _mod12414 from "module_12414" /* 12414 */;

function errorCallback() {
  const obj = _mod12391;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12391;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12414.DEBUG_BUILD) {
      const logger = tmp(12386).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12403.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12383;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12390;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
