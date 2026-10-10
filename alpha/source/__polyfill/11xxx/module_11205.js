// Module ID: 11205
// Function ID: 11206
// Dependencies: [11206, 11209]
// Exports: addGlobalErrorInstrumentationHandler

// Module 11205
import _mod11206 from "module_11206" /* 11206 */;
import _mod11209 from "module_11209" /* 11209 */;

function instrumentError() {
  onerror = _mod11209.GLOBAL_OBJ.onerror;
  _mod11209.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod11206;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod11209.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod11206;
  obj.addHandler("error", arg0);
  const obj2 = _mod11206;
  obj2.maybeInstrument("error", instrumentError);
};
