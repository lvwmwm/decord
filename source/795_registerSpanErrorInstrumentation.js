// Module ID: 795
// Function ID: 8954
// Name: registerSpanErrorInstrumentation
// Dependencies: [808, 798, 802, 819, 6, 7]

// Module 795 (registerSpanErrorInstrumentation)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let closure_2 = false;
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  function errorCallback() {
    let obj = callback(closure_1[0]);
    const activeSpan = obj.getActiveSpan();
    let rootSpan = activeSpan;
    if (activeSpan) {
      rootSpan = callback(closure_1[0]).getRootSpan(activeSpan);
      const obj3 = callback(closure_1[0]);
    }
    if (rootSpan) {
      if (callback(closure_1[1]).DEBUG_BUILD) {
        const debug = callback(closure_1[2]).debug;
        const _HermesInternal = HermesInternal;
        debug.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
      }
      obj = { code: callback(closure_1[3]).SPAN_STATUS_ERROR, message: "internal_error" };
      rootSpan.setStatus(obj);
    }
  }
  if (!closure_2) {
    errorCallback.tag = "sentry_tracingErrorCallback";
    closure_2 = true;
    const result = arg1(arg6[4]).addGlobalErrorInstrumentationHandler(errorCallback);
    const obj = arg1(arg6[4]);
    const result1 = arg1(arg6[5]).addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
    const obj2 = arg1(arg6[5]);
  }
};
