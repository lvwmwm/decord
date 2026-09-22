// Module ID: 13051
// Function ID: 13052
// Dependencies: [13052, 13055]
// Exports: addGlobalErrorInstrumentationHandler

// Module 13051
import _mod13052 from "module_13052" /* 13052 */;
import _mod13055 from "module_13055" /* 13055 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod13055.GLOBAL_OBJ.onerror;
  _mod13055.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod13052.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod13055.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  _mod13052.addHandler("error", arg0);
  _mod13052.maybeInstrument("error", instrumentError);
};
