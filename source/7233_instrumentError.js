// Module ID: 7233
// Function ID: 58275
// Name: instrumentError
// Dependencies: [7234, 7237]

// Module 7233 (instrumentError)
const require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  const onerror = require(7237) /* getGlobalSingleton */.GLOBAL_OBJ.onerror;
  require(7237) /* getGlobalSingleton */.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    outer1_0(outer1_1[0]).triggerHandlers("error", { column, error, line, msg, url });
    let applyResult = !tmp2;
    if (!!onerror) {
      const self = this;
      applyResult = onerror(...arguments);
    }
    return applyResult;
  };
  require(7237) /* getGlobalSingleton */.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let c2 = null;
arg5.addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  require(7234) /* addHandler */.addHandler("error", arg0);
  const obj = require(7234) /* addHandler */;
  require(7234) /* addHandler */.maybeInstrument("error", instrumentError);
};
