// Module ID: 6361
// Function ID: 6362
// Name: errorCallback
// Dependencies: [6362, 6369, 6370, 6393, 6365, 6382]

// Module 6361 (errorCallback)
const require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = require(6370) /* spanTimeInputToSeconds */;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(6370).getRootSpan(activeSpan);
    const tmpResult = tmp(6370);
  }
  if (rootSpan) {
    if (tmp(6393).DEBUG_BUILD) {
      const logger = tmp(6365).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: null, message: "internal_error" };
    obj[0] = tmp(6382).SPAN_STATUS_ERROR;
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = require(6362) /* instrumentError */.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj = require(6362) /* instrumentError */;
    const result1 = require(6369) /* instrumentUnhandledRejection */.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
    const obj2 = require(6369) /* instrumentUnhandledRejection */;
  }
};
