// Module ID: 682
// Function ID: 683
// Dependencies: [683, 687, 688, 704, 713, 715]
// Exports: registerSpanErrorInstrumentation

// Module 682
import TRACE_FLAG_NONE from "TRACE_FLAG_NONE" /* 683 */;
import _mod687 from "module_687" /* 687 */;
import SPAN_STATUS_ERROR from "SPAN_STATUS_ERROR" /* 704 */;
import _mod713 from "module_713" /* 713 */;
import _mod715 from "module_715" /* 715 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c2 = false;

export function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    function errorCallback() {
      const obj = TRACE_FLAG_NONE;
      const activeSpan = obj.getActiveSpan();
      let rootSpan = activeSpan;
      if (rootSpan) {
        const tmpResult = TRACE_FLAG_NONE;
        rootSpan = tmpResult.getRootSpan(activeSpan);
      }
      if (rootSpan) {
        if (_mod687.DEBUG_BUILD) {
          const debug = tmp(tmp2[2]).debug;
          const _HermesInternal = HermesInternal;
          debug.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
        }
        const setStatus = rootSpan.setStatus;
        const obj2 = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "internal_error" };
        setStatus(obj2);
      }
    }
    errorCallback.tag = "sentry_tracingErrorCallback";
    c2 = true;
    const tmp2 = require;
    let obj = _mod713;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    let obj2 = _mod715;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
