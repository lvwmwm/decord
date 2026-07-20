// Module ID: 7230
// Function ID: 58218
// Name: instrumentUnhandledRejection
// Dependencies: []

// Module 7230 (instrumentUnhandledRejection)
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
let closure_2 = null;
arg5.addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  arg1(arg6[0]).addHandler("unhandledrejection", arg0);
  const obj = arg1(arg6[0]);
  arg1(arg6[0]).maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
