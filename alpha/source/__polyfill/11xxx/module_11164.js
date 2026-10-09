// Module ID: 11164
// Function ID: 11165
// Dependencies: [11165, 11168]
// Exports: addGlobalErrorInstrumentationHandler

// Module 11164
import _mod11165 from "module_11165" /* 11165 */;
import _mod11168 from "module_11168" /* 11168 */;

function instrumentError() {
  onerror = _mod11168.GLOBAL_OBJ.onerror;
  _mod11168.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod11165;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod11168.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod11165;
  obj.addHandler("error", arg0);
  const obj2 = _mod11165;
  obj2.maybeInstrument("error", instrumentError);
};
