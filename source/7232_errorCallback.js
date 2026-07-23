// Module ID: 7232
// Function ID: 58243
// Name: errorCallback
// Dependencies: [7233, 7240, 7241, 7264, 7236, 7253]

// Module 7232 (errorCallback)
const require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = require(7241) /* spanTimeInputToSeconds */;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = require(7241) /* spanTimeInputToSeconds */.getRootSpan(activeSpan);
    const obj3 = require(7241) /* spanTimeInputToSeconds */;
  }
  if (rootSpan) {
    if (require(7264).DEBUG_BUILD) {
      const logger = require(7236) /* consoleSandbox */.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: require(7253) /* getSpanStatusFromHttpCode */.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = require(7233) /* instrumentError */.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj = require(7233) /* instrumentError */;
    const result1 = require(7240) /* instrumentUnhandledRejection */.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
    const obj2 = require(7240) /* instrumentUnhandledRejection */;
  }
};
