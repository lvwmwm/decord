// Module ID: 7343
// Function ID: 7344
// Name: errorCallback
// Dependencies: [7344, 7351, 7352, 7375, 7347, 7364]

// Module 7343 (errorCallback)
const require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = require(7352) /* spanTimeInputToSeconds */;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(7352).getRootSpan(activeSpan);
    const tmpResult = tmp(7352);
  }
  if (rootSpan) {
    if (tmp(7375).DEBUG_BUILD) {
      const logger = tmp(7347).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: null, message: "internal_error" };
    obj[0] = tmp(7364).SPAN_STATUS_ERROR;
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = require(7344) /* instrumentError */.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj = require(7344) /* instrumentError */;
    const result1 = require(7351) /* instrumentUnhandledRejection */.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
    const obj2 = require(7351) /* instrumentUnhandledRejection */;
  }
};
