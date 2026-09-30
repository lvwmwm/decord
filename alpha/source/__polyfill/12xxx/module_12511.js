// Module ID: 12511
// Function ID: 12512
// Dependencies: [12512, 12515]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12511
import _mod12512 from "module_12512" /* 12512 */;
import _mod12515 from "module_12515" /* 12515 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12515.GLOBAL_OBJ.onerror;
  _mod12515.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12512.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12515.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  _mod12512.addHandler("error", arg0);
  _mod12512.maybeInstrument("error", instrumentError);
};
