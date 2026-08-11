// Module ID: 7452
// Function ID: 7453
// Name: errorCallback
// Dependencies: [7453, 7460, 7461, 7484, 7456, 7473]

// Module 7452 (errorCallback)
const require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = require(7461) /* spanTimeInputToSeconds */;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(7461).getRootSpan(activeSpan);
    const tmpResult = tmp(7461);
  }
  if (rootSpan) {
    if (tmp(7484).DEBUG_BUILD) {
      const logger = tmp(7456).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: null, message: "internal_error" };
    obj[0] = tmp(7473).SPAN_STATUS_ERROR;
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = require(7453) /* instrumentError */.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj = require(7453) /* instrumentError */;
    const result1 = require(7460) /* instrumentUnhandledRejection */.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
    const obj2 = require(7460) /* instrumentUnhandledRejection */;
  }
};
