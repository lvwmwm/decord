// Module ID: 7734
// Function ID: 7735
// Name: errorCallback
// Dependencies: [7735, 7742, 7743, 7766, 7738, 7755]

// Module 7734 (errorCallback)
const require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = require(7743) /* spanTimeInputToSeconds */;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(7743).getRootSpan(activeSpan);
    const tmpResult = tmp(7743);
  }
  if (rootSpan) {
    if (tmp(7766).DEBUG_BUILD) {
      const logger = tmp(7738).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: null, message: "internal_error" };
    obj[0] = tmp(7755).SPAN_STATUS_ERROR;
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = require(7735) /* instrumentError */.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj = require(7735) /* instrumentError */;
    const result1 = require(7742) /* instrumentUnhandledRejection */.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
    const obj2 = require(7742) /* instrumentUnhandledRejection */;
  }
};
