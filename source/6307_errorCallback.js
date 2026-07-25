// Module ID: 6307
// Function ID: 56724
// Name: errorCallback
// Dependencies: [6308, 6315, 6316, 6339, 6311, 6328]

// Module 6307 (errorCallback)
const require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = require(6316) /* spanTimeInputToSeconds */;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = require(6316) /* spanTimeInputToSeconds */.getRootSpan(activeSpan);
    const obj3 = require(6316) /* spanTimeInputToSeconds */;
  }
  if (rootSpan) {
    if (require(6339).DEBUG_BUILD) {
      const logger = require(6311) /* consoleSandbox */.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: require(6328) /* getSpanStatusFromHttpCode */.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = require(6308) /* instrumentError */.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj = require(6308) /* instrumentError */;
    const result1 = require(6315) /* instrumentUnhandledRejection */.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
    const obj2 = require(6315) /* instrumentUnhandledRejection */;
  }
};
