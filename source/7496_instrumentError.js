// Module ID: 7496
// Function ID: 7497
// Name: instrumentError
// Dependencies: [7497, 7500]

// Module 7496 (instrumentError)
const require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  const onerror = require(7500) /* getGlobalSingleton */.GLOBAL_OBJ.onerror;
  require(7500) /* getGlobalSingleton */.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    callback(table[0]).triggerHandlers("error", { column, error, line, msg, url });
    if (!onerror) {
      return tmp2;
    } else {
      const self = this;
      const apply = onerror.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      const tmp3 = onerror;
    }
  };
  require(7500) /* getGlobalSingleton */.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let c2 = null;
arg5.addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  require(7497) /* addHandler */.addHandler("error", arg0);
  const obj = require(7497) /* addHandler */;
  require(7497) /* addHandler */.maybeInstrument("error", instrumentError);
};
