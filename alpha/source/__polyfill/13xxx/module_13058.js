// Module ID: 13058
// Function ID: 13059
// Dependencies: [13052, 13055]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 13058
import _mod13052 from "module_13052" /* 13052 */;
import _mod13055 from "module_13055" /* 13055 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13055.GLOBAL_OBJ.onunhandledrejection;
  _mod13055.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod13052.triggerHandlers("unhandledrejection", arg0);
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
  _mod13055.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  _mod13052.addHandler("unhandledrejection", arg0);
  _mod13052.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
