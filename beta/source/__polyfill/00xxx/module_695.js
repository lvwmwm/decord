// Module ID: 695
// Function ID: 696
// Dependencies: [696, 700, 701, 717, 726, 728]
// Exports: registerSpanErrorInstrumentation

// Module 695
import TRACE_FLAG_NONE from "TRACE_FLAG_NONE" /* 696 */;
import _mod700 from "module_700" /* 700 */;
import SPAN_STATUS_ERROR from "SPAN_STATUS_ERROR" /* 717 */;
import _mod726 from "module_726" /* 726 */;
import _mod728 from "module_728" /* 728 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c2 = false;

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
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
        if (_mod700.DEBUG_BUILD) {
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
    let obj = _mod726;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    let obj2 = _mod728;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
