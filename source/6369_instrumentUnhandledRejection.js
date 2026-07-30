// Module ID: 6369
// Function ID: 6370
// Name: instrumentUnhandledRejection
// Dependencies: [6363, 6366]

// Module 6369 (instrumentUnhandledRejection)
const require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  const onunhandledrejection = require(6366) /* getGlobalSingleton */.GLOBAL_OBJ.onunhandledrejection;
  require(6366) /* getGlobalSingleton */.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
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
  require(6366) /* getGlobalSingleton */.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let c2 = null;
arg5.addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  require(6363) /* addHandler */.addHandler("unhandledrejection", arg0);
  const obj = require(6363) /* addHandler */;
  require(6363) /* addHandler */.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
