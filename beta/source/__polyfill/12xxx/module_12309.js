// Module ID: 12309
// Function ID: 12310
// Dependencies: [12310, 12317, 12318, 12341, 12313, 12330]
// Exports: registerSpanErrorInstrumentation

// Module 12309
import _mod12310 from "module_12310" /* 12310 */;
import _mod12317 from "module_12317" /* 12317 */;
import _mod12318 from "module_12318" /* 12318 */;
import _mod12330 from "module_12330" /* 12330 */;
import _mod12341 from "module_12341" /* 12341 */;

function errorCallback() {
  const obj = _mod12318;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12318;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12341.DEBUG_BUILD) {
      const logger = tmp(12313).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12330.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12310;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12317;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
