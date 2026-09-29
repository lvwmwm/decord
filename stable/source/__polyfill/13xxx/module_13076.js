// Module ID: 13076
// Function ID: 13077
// Dependencies: [13077, 13080]
// Exports: addGlobalErrorInstrumentationHandler

// Module 13076
import _mod13077 from "module_13077" /* 13077 */;
import _mod13080 from "module_13080" /* 13080 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod13080.GLOBAL_OBJ.onerror;
  _mod13080.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod13077.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod13080.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  _mod13077.addHandler("error", arg0);
  _mod13077.maybeInstrument("error", instrumentError);
};
