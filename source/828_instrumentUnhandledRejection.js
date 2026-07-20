// Module ID: 828
// Function ID: 9233
// Name: instrumentUnhandledRejection
// Dependencies: []

// Module 828 (instrumentUnhandledRejection)
function instrumentUnhandledRejection() {
  const onunhandledrejection = arg1(arg6[1]).GLOBAL_OBJ.onunhandledrejection;
  arg1(arg6[1]).GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    callback(closure_1[0]).triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (!applyResult) {
      const self = this;
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  arg1(arg6[1]).GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let closure_2 = null;
arg5.addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  arg1(arg6[0]).addHandler("unhandledrejection", arg0);
  const obj = arg1(arg6[0]);
  arg1(arg6[0]).maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
