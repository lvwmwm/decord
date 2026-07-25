// Module ID: 6308
// Function ID: 56727
// Name: instrumentError
// Dependencies: [6309, 6312]

// Module 6308 (instrumentError)
const require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  const onerror = require(6312) /* getGlobalSingleton */.GLOBAL_OBJ.onerror;
  require(6312) /* getGlobalSingleton */.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    outer1_0(outer1_1[0]).triggerHandlers("error", { column, error, line, msg, url });
    let applyResult = !tmp2;
    if (!!onerror) {
      const self = this;
      applyResult = onerror(...arguments);
    }
    return applyResult;
  };
  require(6312) /* getGlobalSingleton */.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let c2 = null;
arg5.addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  require(6309) /* addHandler */.addHandler("error", arg0);
  const obj = require(6309) /* addHandler */;
  require(6309) /* addHandler */.maybeInstrument("error", instrumentError);
};
