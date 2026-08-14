// Module ID: 7516
// Function ID: 7517
// Name: errorCallback
// Dependencies: [7517, 7524, 7525, 7548, 7520, 7537]

// Module 7516 (errorCallback)
const require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = require(7525) /* spanTimeInputToSeconds */;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(7525).getRootSpan(activeSpan);
    const tmpResult = tmp(7525);
  }
  if (rootSpan) {
    if (tmp(7548).DEBUG_BUILD) {
      const logger = tmp(7520).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: null, message: "internal_error" };
    obj[0] = tmp(7537).SPAN_STATUS_ERROR;
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = require(7517) /* instrumentError */.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj = require(7517) /* instrumentError */;
    const result1 = require(7524) /* instrumentUnhandledRejection */.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
    const obj2 = require(7524) /* instrumentUnhandledRejection */;
  }
};
