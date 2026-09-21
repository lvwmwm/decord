// Module ID: 718
// Function ID: 719
// Name: instrumentError
// Dependencies: [719, 690]
// Exports: addGlobalErrorInstrumentationHandler

// Module 718 (instrumentError)
import _mod690 from "module_690" /* 690 */;
import _mod719 from "module_719" /* 719 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod690.GLOBAL_OBJ.onerror;
  _mod690.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod719.triggerHandlers("error", { column, error, line, msg, url });
    if (!onerror) {
      return tmp2;
    } else {
      const self = this;
      const apply = onerror.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
    }
  };
  _mod690.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  _mod719.addHandler("error", arg0);
  _mod719.maybeInstrument("error", instrumentError);
};
