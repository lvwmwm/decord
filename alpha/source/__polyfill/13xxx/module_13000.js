// Module ID: 13000
// Function ID: 13001
// Dependencies: [13001, 13008, 13009, 13032, 13004, 13021]
// Exports: registerSpanErrorInstrumentation

// Module 13000
import _mod13001 from "module_13001" /* 13001 */;
import _mod13008 from "module_13008" /* 13008 */;
import _mod13009 from "module_13009" /* 13009 */;
import _mod13021 from "module_13021" /* 13021 */;
import _mod13032 from "module_13032" /* 13032 */;

function errorCallback() {
  const obj = _mod13009;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod13009;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod13032.DEBUG_BUILD) {
      const logger = tmp(13004).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod13021.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod13001;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod13008;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
