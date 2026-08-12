// Module ID: 7491
// Function ID: 7492
// Name: errorCallback
// Dependencies: [7492, 7499, 7500, 7523, 7495, 7512]

// Module 7491 (errorCallback)
const require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = require(7500) /* spanTimeInputToSeconds */;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(7500).getRootSpan(activeSpan);
    const tmpResult = tmp(7500);
  }
  if (rootSpan) {
    if (tmp(7523).DEBUG_BUILD) {
      const logger = tmp(7495).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: null, message: "internal_error" };
    obj[0] = tmp(7512).SPAN_STATUS_ERROR;
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = require(7492) /* instrumentError */.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj = require(7492) /* instrumentError */;
    const result1 = require(7499) /* instrumentUnhandledRejection */.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
    const obj2 = require(7499) /* instrumentUnhandledRejection */;
  }
};
