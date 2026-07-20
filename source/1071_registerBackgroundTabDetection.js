// Module ID: 1071
// Function ID: 12299
// Name: registerBackgroundTabDetection
// Dependencies: []

// Module 1071 (registerBackgroundTabDetection)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.registerBackgroundTabDetection = function registerBackgroundTabDetection() {
  if (arg1(arg6[0]).WINDOW.document) {
    const _document = tmp(tmp2[0]).WINDOW.document;
    const listener = _document.addEventListener("visibilitychange", () => {
      let op;
      let status;
      let obj = callback(closure_1[1]);
      const activeSpan = obj.getActiveSpan();
      if (activeSpan) {
        const rootSpan = callback(closure_1[1]).getRootSpan(activeSpan);
        if (callback(closure_1[0]).WINDOW.document.hidden) {
          if (rootSpan) {
            const obj4 = callback(closure_1[1]);
            ({ op, status } = callback(closure_1[1]).spanToJSON(rootSpan));
            if (callback(closure_1[2]).DEBUG_BUILD) {
              const debug = callback(closure_1[1]).debug;
              const _HermesInternal = HermesInternal;
              debug.log("[Tracing] Transaction: " + "cancelled" + " -> since tab moved to the background, op: " + op);
            }
            if (!status) {
              obj = { code: callback(closure_1[1]).SPAN_STATUS_ERROR, message: "cancelled" };
              rootSpan.setStatus(obj);
            }
            const attr = rootSpan.setAttribute("sentry.cancellation_reason", "document.hidden");
            rootSpan.end();
            const spanToJSONResult = callback(closure_1[1]).spanToJSON(rootSpan);
          }
        }
        const obj2 = callback(closure_1[1]);
      }
    });
  } else if (tmp(tmp2[2]).DEBUG_BUILD) {
    const debug = arg1(arg6[1]).debug;
    debug.warn("[Tracing] Could not set up background tab detection due to lack of global document");
  }
};
