// Module ID: 795
// Function ID: 8960
// Name: registerSpanErrorInstrumentation
// Dependencies: [796, 800, 801, 817, 826, 828]

// Module 795 (registerSpanErrorInstrumentation)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c2 = false;
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  function errorCallback() {
    let obj = outer1_0(outer1_1[0]);
    const activeSpan = obj.getActiveSpan();
    let rootSpan = activeSpan;
    if (activeSpan) {
      rootSpan = outer1_0(outer1_1[0]).getRootSpan(activeSpan);
      const obj3 = outer1_0(outer1_1[0]);
    }
    if (rootSpan) {
      if (outer1_0(outer1_1[1]).DEBUG_BUILD) {
        const debug = outer1_0(outer1_1[2]).debug;
        const _HermesInternal = HermesInternal;
        debug.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
      }
      obj = { code: outer1_0(outer1_1[3]).SPAN_STATUS_ERROR, message: "internal_error" };
      rootSpan.setStatus(obj);
    }
  }
  if (!c2) {
    errorCallback.tag = "sentry_tracingErrorCallback";
    c2 = true;
    const result = require(826) /* instrumentError */.addGlobalErrorInstrumentationHandler(errorCallback);
    let obj = require(826) /* instrumentError */;
    const result1 = require(828) /* instrumentUnhandledRejection */.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
    const obj2 = require(828) /* instrumentUnhandledRejection */;
  }
};
