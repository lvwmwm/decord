// Module ID: 1071
// Function ID: 12304
// Name: registerBackgroundTabDetection
// Dependencies: [1004, 794, 1048]

// Module 1071 (registerBackgroundTabDetection)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.registerBackgroundTabDetection = function registerBackgroundTabDetection() {
  if (require(1004) /* ignoreNextOnError */.WINDOW.document) {
    const _document = tmp(1004).WINDOW.document;
    const listener = _document.addEventListener("visibilitychange", () => {
      let op;
      let status;
      let obj = outer1_0(outer1_1[1]);
      const activeSpan = obj.getActiveSpan();
      if (activeSpan) {
        const rootSpan = outer1_0(outer1_1[1]).getRootSpan(activeSpan);
        if (outer1_0(outer1_1[0]).WINDOW.document.hidden) {
          if (rootSpan) {
            const obj4 = outer1_0(outer1_1[1]);
            ({ op, status } = outer1_0(outer1_1[1]).spanToJSON(rootSpan));
            if (outer1_0(outer1_1[2]).DEBUG_BUILD) {
              const debug = outer1_0(outer1_1[1]).debug;
              const _HermesInternal = HermesInternal;
              debug.log("[Tracing] Transaction: " + "cancelled" + " -> since tab moved to the background, op: " + op);
            }
            if (!status) {
              obj = { code: outer1_0(outer1_1[1]).SPAN_STATUS_ERROR, message: "cancelled" };
              rootSpan.setStatus(obj);
            }
            const attr = rootSpan.setAttribute("sentry.cancellation_reason", "document.hidden");
            rootSpan.end();
            const spanToJSONResult = outer1_0(outer1_1[1]).spanToJSON(rootSpan);
          }
        }
        const obj2 = outer1_0(outer1_1[1]);
      }
    });
  } else if (tmp(1048).DEBUG_BUILD) {
    let debug = require(794) /* registerSpanErrorInstrumentation */.debug;
    debug.warn("[Tracing] Could not set up background tab detection due to lack of global document");
  }
};
