// Module ID: 6364
// Function ID: 6365
// Name: errorCallback
// Dependencies: [6365, 6372, 6373, 6396, 6368, 6385]

// Module 6364 (errorCallback)
const require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = require(6373) /* spanTimeInputToSeconds */;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(6373).getRootSpan(activeSpan);
    const tmpResult = tmp(6373);
  }
  if (rootSpan) {
    if (tmp(6396).DEBUG_BUILD) {
      const logger = tmp(6368).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: null, message: "internal_error" };
    obj[0] = tmp(6385).SPAN_STATUS_ERROR;
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = require(6365) /* instrumentError */.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj = require(6365) /* instrumentError */;
    const result1 = require(6372) /* instrumentUnhandledRejection */.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
    const obj2 = require(6372) /* instrumentUnhandledRejection */;
  }
};
