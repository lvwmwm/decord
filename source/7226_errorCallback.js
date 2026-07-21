// Module ID: 7226
// Function ID: 58186
// Name: errorCallback
// Dependencies: []

// Module 7226 (errorCallback)
function errorCallback() {
  let obj = arg1(arg6[2]);
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = arg1(arg6[2]).getRootSpan(activeSpan);
    const obj3 = arg1(arg6[2]);
  }
  if (rootSpan) {
    if (arg1(arg6[3]).DEBUG_BUILD) {
      const logger = arg1(arg6[4]).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: arg1(arg6[5]).SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj);
  }
}
let closure_2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!closure_2) {
    closure_2 = true;
    const result = arg1(arg6[0]).addGlobalErrorInstrumentationHandler(errorCallback);
    const obj = arg1(arg6[0]);
    const result1 = arg1(arg6[1]).addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
    const obj2 = arg1(arg6[1]);
  }
};
