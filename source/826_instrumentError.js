// Module ID: 826
// Function ID: 9227
// Name: instrumentError
// Dependencies: []

// Module 826 (instrumentError)
function instrumentError() {
  const onerror = arg1(arg6[1]).GLOBAL_OBJ.onerror;
  arg1(arg6[1]).GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    callback(closure_1[0]).triggerHandlers("error", { column, error, line, msg, url });
    let applyResult = !tmp2;
    if (!!onerror) {
      const self = this;
      applyResult = onerror(...arguments);
    }
    return applyResult;
  };
  arg1(arg6[1]).GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let closure_2 = null;
arg5.addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  arg1(arg6[0]).addHandler("error", arg0);
  const obj = arg1(arg6[0]);
  arg1(arg6[0]).maybeInstrument("error", instrumentError);
};
