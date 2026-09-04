// Module ID: 12725
// Function ID: 12726
// Name: errorCallback
// Dependencies: [12726, 12733, 12734, 12757, 12729, 12746]

// Module 12725 (errorCallback)
import instrumentError from "instrumentError" /* 12726 */;
import instrumentUnhandledRejection from "instrumentUnhandledRejection" /* 12733 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12734 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = spanTimeInputToSeconds;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(12734).getRootSpan(activeSpan);
    const tmpResult = tmp(12734);
  }
  if (rootSpan) {
    if (tmp(12757).DEBUG_BUILD) {
      const logger = tmp(12729).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: null, message: "internal_error" };
    obj[0] = tmp(12746).SPAN_STATUS_ERROR;
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = instrumentError.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj = instrumentError;
    const result1 = instrumentUnhandledRejection.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
    const obj2 = instrumentUnhandledRejection;
  }
};
