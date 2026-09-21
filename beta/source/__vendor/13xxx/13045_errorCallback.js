// Module ID: 13045
// Function ID: 13046
// Name: errorCallback
// Dependencies: [13046, 13053, 13054, 13077, 13049, 13066]
// Exports: registerSpanErrorInstrumentation

// Module 13045 (errorCallback)
import _mod13046 from "module_13046" /* 13046 */;
import _mod13053 from "module_13053" /* 13053 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13054 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(13054).getRootSpan(activeSpan);
    const tmpResult = tmp(13054);
  }
  if (rootSpan) {
    if (tmp(13077).DEBUG_BUILD) {
      const logger = tmp(13049).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: tmp(13066).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13046.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13053.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
