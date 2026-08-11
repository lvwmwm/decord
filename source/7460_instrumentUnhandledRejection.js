// Module ID: 7460
// Function ID: 7461
// Name: instrumentUnhandledRejection
// Dependencies: [7454, 7457]

// Module 7460 (instrumentUnhandledRejection)
const require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  const onunhandledrejection = require(7457) /* getGlobalSingleton */.GLOBAL_OBJ.onunhandledrejection;
  require(7457) /* getGlobalSingleton */.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
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
  require(7457) /* getGlobalSingleton */.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let c2 = null;
arg5.addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  require(7454) /* addHandler */.addHandler("unhandledrejection", arg0);
  const obj = require(7454) /* addHandler */;
  require(7454) /* addHandler */.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
