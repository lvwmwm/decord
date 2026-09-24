// Module ID: 13082
// Function ID: 13083
// Dependencies: [13083, 13086]
// Exports: addGlobalErrorInstrumentationHandler

// Module 13082
import _mod13083 from "module_13083" /* 13083 */;
import _mod13086 from "module_13086" /* 13086 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod13086.GLOBAL_OBJ.onerror;
  _mod13086.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod13083.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod13086.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  _mod13083.addHandler("error", arg0);
  _mod13083.maybeInstrument("error", instrumentError);
};
