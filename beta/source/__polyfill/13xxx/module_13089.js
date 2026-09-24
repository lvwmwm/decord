// Module ID: 13089
// Function ID: 13090
// Dependencies: [13083, 13086]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 13089
import _mod13083 from "module_13083" /* 13083 */;
import _mod13086 from "module_13086" /* 13086 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13086.GLOBAL_OBJ.onunhandledrejection;
  _mod13086.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod13083.triggerHandlers("unhandledrejection", arg0);
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
  _mod13086.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  _mod13083.addHandler("unhandledrejection", arg0);
  _mod13083.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
