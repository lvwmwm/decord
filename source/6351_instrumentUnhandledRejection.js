// Module ID: 6351
// Function ID: 56857
// Name: instrumentUnhandledRejection
// Dependencies: [6345, 6348]

// Module 6351 (instrumentUnhandledRejection)
const require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  const onunhandledrejection = require(6348) /* getGlobalSingleton */.GLOBAL_OBJ.onunhandledrejection;
  require(6348) /* getGlobalSingleton */.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    outer1_0(outer1_1[0]).triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (!applyResult) {
      const self = this;
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  require(6348) /* getGlobalSingleton */.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let c2 = null;
arg5.addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  require(6345) /* addHandler */.addHandler("unhandledrejection", arg0);
  const obj = require(6345) /* addHandler */;
  require(6345) /* addHandler */.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
