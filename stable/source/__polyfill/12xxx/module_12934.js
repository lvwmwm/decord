// Module ID: 12934
// Function ID: 12935
// Dependencies: [12928, 12931]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 12934
import _mod12928 from "module_12928" /* 12928 */;
import _mod12931 from "module_12931" /* 12931 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12931.GLOBAL_OBJ.onunhandledrejection;
  _mod12931.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12928.triggerHandlers("unhandledrejection", arg0);
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
    }
  };
  _mod12931.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  _mod12928.addHandler("unhandledrejection", arg0);
  _mod12928.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
