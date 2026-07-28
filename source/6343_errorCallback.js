// Module ID: 6343
// Function ID: 56814
// Name: errorCallback
// Dependencies: [6344, 6351, 6352, 6375, 6347, 6364]

// Module 6343 (errorCallback)
const require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = require(6352) /* spanTimeInputToSeconds */;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = require(6352) /* spanTimeInputToSeconds */.getRootSpan(activeSpan);
    const obj3 = require(6352) /* spanTimeInputToSeconds */;
  }
  if (rootSpan) {
    if (require(6375).DEBUG_BUILD) {
      const logger = require(6347) /* consoleSandbox */.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: require(6364) /* getSpanStatusFromHttpCode */.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = require(6344) /* instrumentError */.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj = require(6344) /* instrumentError */;
    const result1 = require(6351) /* instrumentUnhandledRejection */.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
    const obj2 = require(6351) /* instrumentUnhandledRejection */;
  }
};
