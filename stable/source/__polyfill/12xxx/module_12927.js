// Module ID: 12927
// Function ID: 12928
// Dependencies: [12928, 12931]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12927
import _mod12928 from "module_12928" /* 12928 */;
import _mod12931 from "module_12931" /* 12931 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12931.GLOBAL_OBJ.onerror;
  _mod12931.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12928.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12931.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  _mod12928.addHandler("error", arg0);
  _mod12928.maybeInstrument("error", instrumentError);
};
