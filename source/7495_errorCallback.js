// Module ID: 7495
// Function ID: 7496
// Name: errorCallback
// Dependencies: [7496, 7503, 7504, 7527, 7499, 7516]

// Module 7495 (errorCallback)
const require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = require(7504) /* spanTimeInputToSeconds */;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(7504).getRootSpan(activeSpan);
    const tmpResult = tmp(7504);
  }
  if (rootSpan) {
    if (tmp(7527).DEBUG_BUILD) {
      const logger = tmp(7499).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: null, message: "internal_error" };
    obj[0] = tmp(7516).SPAN_STATUS_ERROR;
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = require(7496) /* instrumentError */.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj = require(7496) /* instrumentError */;
    const result1 = require(7503) /* instrumentUnhandledRejection */.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
    const obj2 = require(7503) /* instrumentUnhandledRejection */;
  }
};
