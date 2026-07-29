// Module ID: 6372
// Function ID: 6373
// Name: instrumentUnhandledRejection
// Dependencies: [6366, 6369]

// Module 6372 (instrumentUnhandledRejection)
const require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  const onunhandledrejection = require(6369) /* getGlobalSingleton */.GLOBAL_OBJ.onunhandledrejection;
  require(6369) /* getGlobalSingleton */.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
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
  require(6369) /* getGlobalSingleton */.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let c2 = null;
arg5.addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  require(6366) /* addHandler */.addHandler("unhandledrejection", arg0);
  const obj = require(6366) /* addHandler */;
  require(6366) /* addHandler */.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
