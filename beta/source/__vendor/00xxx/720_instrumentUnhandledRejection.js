// Module ID: 720
// Function ID: 721
// Name: instrumentUnhandledRejection
// Dependencies: [719, 690]
// Exports: addGlobalUnhandledRejectionInstrumentationHandler

// Module 720 (instrumentUnhandledRejection)
import _mod690 from "module_690" /* 690 */;
import _mod719 from "module_719" /* 719 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod690.GLOBAL_OBJ.onunhandledrejection;
  _mod690.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod719.triggerHandlers("unhandledrejection", arg0);
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
  _mod690.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  _mod719.addHandler("unhandledrejection", arg0);
  _mod719.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
