// Module ID: 7503
// Function ID: 7504
// Name: instrumentUnhandledRejection
// Dependencies: [7497, 7500]

// Module 7503 (instrumentUnhandledRejection)
const require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  const onunhandledrejection = require(7500) /* getGlobalSingleton */.GLOBAL_OBJ.onunhandledrejection;
  require(7500) /* getGlobalSingleton */.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    callback(table[0]).triggerHandlers("unhandledrejection", arg0);
    if (!onunhandledrejection) {
      return !onunhandledrejection;
    } else {
      const self = this;
      const apply = onunhandledrejection.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      const tmp2 = onunhandledrejection;
    }
  };
  require(7500) /* getGlobalSingleton */.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let c2 = null;
arg5.addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  require(7497) /* addHandler */.addHandler("unhandledrejection", arg0);
  const obj = require(7497) /* addHandler */;
  require(7497) /* addHandler */.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
