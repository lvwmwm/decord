// Module ID: 12292
// Function ID: 12293
// Dependencies: [12293, 12296]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12292
import _mod12293 from "module_12293" /* 12293 */;
import _mod12296 from "module_12296" /* 12296 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12296.GLOBAL_OBJ.onerror;
  _mod12296.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12293.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12296.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  _mod12293.addHandler("error", arg0);
  _mod12293.maybeInstrument("error", instrumentError);
};
