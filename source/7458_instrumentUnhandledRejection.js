// Module ID: 7458
// Function ID: 7459
// Name: instrumentUnhandledRejection
// Dependencies: [7452, 7455]

// Module 7458 (instrumentUnhandledRejection)
const require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  const onunhandledrejection = require(7455) /* getGlobalSingleton */.GLOBAL_OBJ.onunhandledrejection;
  require(7455) /* getGlobalSingleton */.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
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
  require(7455) /* getGlobalSingleton */.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let c2 = null;
arg5.addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  require(7452) /* addHandler */.addHandler("unhandledrejection", arg0);
  const obj = require(7452) /* addHandler */;
  require(7452) /* addHandler */.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
