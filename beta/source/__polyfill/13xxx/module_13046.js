// Module ID: 13046
// Function ID: 13047
// Dependencies: [13047, 13050]
// Exports: addGlobalErrorInstrumentationHandler

// Module 13046
import _mod13047 from "module_13047" /* 13047 */;
import _mod13050 from "module_13050" /* 13050 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod13050.GLOBAL_OBJ.onerror;
  _mod13050.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod13047.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod13050.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  _mod13047.addHandler("error", arg0);
  _mod13047.maybeInstrument("error", instrumentError);
};
