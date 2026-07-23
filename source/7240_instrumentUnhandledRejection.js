// Module ID: 7240
// Function ID: 58286
// Name: instrumentUnhandledRejection
// Dependencies: [7234, 7237]

// Module 7240 (instrumentUnhandledRejection)
const require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  const onunhandledrejection = require(7237) /* getGlobalSingleton */.GLOBAL_OBJ.onunhandledrejection;
  require(7237) /* getGlobalSingleton */.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    outer1_0(outer1_1[0]).triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (!applyResult) {
      const self = this;
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  require(7237) /* getGlobalSingleton */.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let c2 = null;
arg5.addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  require(7234) /* addHandler */.addHandler("unhandledrejection", arg0);
  const obj = require(7234) /* addHandler */;
  require(7234) /* addHandler */.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
