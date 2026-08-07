// Module ID: 7390
// Function ID: 7391
// Name: errorCallback
// Dependencies: [7391, 7398, 7399, 7422, 7394, 7411]

// Module 7390 (errorCallback)
const require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = require(7399) /* spanTimeInputToSeconds */;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(7399).getRootSpan(activeSpan);
    const tmpResult = tmp(7399);
  }
  if (rootSpan) {
    if (tmp(7422).DEBUG_BUILD) {
      const logger = tmp(7394).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: null, message: "internal_error" };
    obj[0] = tmp(7411).SPAN_STATUS_ERROR;
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = require(7391) /* instrumentError */.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj = require(7391) /* instrumentError */;
    const result1 = require(7398) /* instrumentUnhandledRejection */.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
    const obj2 = require(7398) /* instrumentUnhandledRejection */;
  }
};
