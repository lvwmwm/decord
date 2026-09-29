// Module ID: 13083
// Function ID: 13084
// Dependencies: [13077, 13080]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 13083
import _mod13077 from "module_13077" /* 13077 */;
import _mod13080 from "module_13080" /* 13080 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13080.GLOBAL_OBJ.onunhandledrejection;
  _mod13080.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod13077.triggerHandlers("unhandledrejection", arg0);
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
  _mod13080.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  _mod13077.addHandler("unhandledrejection", arg0);
  _mod13077.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
