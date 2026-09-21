// Module ID: 13053
// Function ID: 13054
// Dependencies: [13047, 13050]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 13053
import _mod13047 from "module_13047" /* 13047 */;
import _mod13050 from "module_13050" /* 13050 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13050.GLOBAL_OBJ.onunhandledrejection;
  _mod13050.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod13047.triggerHandlers("unhandledrejection", arg0);
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
  _mod13050.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  _mod13047.addHandler("unhandledrejection", arg0);
  _mod13047.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
