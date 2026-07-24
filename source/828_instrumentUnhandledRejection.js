// Module ID: 828
// Function ID: 9239
// Name: instrumentUnhandledRejection
// Dependencies: [827, 798]

// Module 828 (instrumentUnhandledRejection)
const require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  const onunhandledrejection = require(798).GLOBAL_OBJ.onunhandledrejection;
  require(798).GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    outer1_0(outer1_1[0]).triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (!applyResult) {
      const self = this;
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  require(798).GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c2 = null;
arg5.addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  require(827) /* addHandler */.addHandler("unhandledrejection", arg0);
  const obj = require(827) /* addHandler */;
  require(827) /* addHandler */.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
