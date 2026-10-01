// Module ID: 12522
// Function ID: 12523
// Dependencies: [12523, 12526]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12522
import _mod12523 from "module_12523" /* 12523 */;
import _mod12526 from "module_12526" /* 12526 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12526.GLOBAL_OBJ.onerror;
  _mod12526.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12523.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12526.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  _mod12523.addHandler("error", arg0);
  _mod12523.maybeInstrument("error", instrumentError);
};
