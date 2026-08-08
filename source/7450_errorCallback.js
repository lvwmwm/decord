// Module ID: 7450
// Function ID: 7451
// Name: errorCallback
// Dependencies: [7451, 7458, 7459, 7482, 7454, 7471]

// Module 7450 (errorCallback)
const require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = require(7459) /* spanTimeInputToSeconds */;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(7459).getRootSpan(activeSpan);
    const tmpResult = tmp(7459);
  }
  if (rootSpan) {
    if (tmp(7482).DEBUG_BUILD) {
      const logger = tmp(7454).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: null, message: "internal_error" };
    obj[0] = tmp(7471).SPAN_STATUS_ERROR;
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = require(7451) /* instrumentError */.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj = require(7451) /* instrumentError */;
    const result1 = require(7458) /* instrumentUnhandledRejection */.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
    const obj2 = require(7458) /* instrumentUnhandledRejection */;
  }
};
