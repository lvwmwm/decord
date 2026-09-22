// Module ID: 12926
// Function ID: 12927
// Name: errorCallback
// Dependencies: [12927, 12934, 12935, 12958, 12930, 12947]
// Exports: registerSpanErrorInstrumentation

// Module 12926 (errorCallback)
import _mod12927 from "module_12927" /* 12927 */;
import _mod12934 from "module_12934" /* 12934 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12935 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(12935).getRootSpan(activeSpan);
    const tmpResult = tmp(12935);
  }
  if (rootSpan) {
    if (tmp(12958).DEBUG_BUILD) {
      const logger = tmp(12930).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: tmp(12947).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12927.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12934.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
