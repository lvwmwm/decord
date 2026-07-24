// Module ID: 826
// Function ID: 9229
// Name: instrumentError
// Dependencies: [827, 798]

// Module 826 (instrumentError)
const require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  const onerror = require(798).GLOBAL_OBJ.onerror;
  require(798).GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    outer1_0(outer1_1[0]).triggerHandlers("error", { column, error, line, msg, url });
    let applyResult = !tmp2;
    if (!!onerror) {
      const self = this;
      applyResult = onerror(...arguments);
    }
    return applyResult;
  };
  require(798).GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c2 = null;
arg5.addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  require(827) /* addHandler */.addHandler("error", arg0);
  const obj = require(827) /* addHandler */;
  require(827) /* addHandler */.maybeInstrument("error", instrumentError);
};
