// Module ID: 6365
// Function ID: 6366
// Name: instrumentError
// Dependencies: [6366, 6369]

// Module 6365 (instrumentError)
const require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  const onerror = require(6369) /* getGlobalSingleton */.GLOBAL_OBJ.onerror;
  require(6369) /* getGlobalSingleton */.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
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
  require(6369) /* getGlobalSingleton */.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let c2 = null;
arg5.addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  require(6366) /* addHandler */.addHandler("error", arg0);
  const obj = require(6366) /* addHandler */;
  require(6366) /* addHandler */.maybeInstrument("error", instrumentError);
};
