// Module ID: 13142
// Function ID: 13143
// Dependencies: [13143, 13146]
// Exports: addGlobalErrorInstrumentationHandler

// Module 13142
import _mod13143 from "module_13143" /* 13143 */;
import _mod13146 from "module_13146" /* 13146 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod13146.GLOBAL_OBJ.onerror;
  _mod13146.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod13143.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod13146.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  _mod13143.addHandler("error", arg0);
  _mod13143.maybeInstrument("error", instrumentError);
};
