// Module ID: 683
// Function ID: 684
// Dependencies: [684, 688, 689, 705, 714, 716]
// Exports: registerSpanErrorInstrumentation

// Module 683
import TRACE_FLAG_NONE from "TRACE_FLAG_NONE" /* 684 */;
import _mod688 from "module_688" /* 688 */;
import SPAN_STATUS_ERROR from "SPAN_STATUS_ERROR" /* 705 */;
import _mod714 from "module_714" /* 714 */;
import _mod716 from "module_716" /* 716 */;

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
        if (_mod688.DEBUG_BUILD) {
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
    let obj = _mod714;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    let obj2 = _mod716;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
