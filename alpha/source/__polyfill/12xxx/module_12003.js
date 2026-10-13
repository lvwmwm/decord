// Module ID: 12003
// Function ID: 12004
// Dependencies: [12004, 12007]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12003
import _mod12004 from "module_12004" /* 12004 */;
import _mod12007 from "module_12007" /* 12007 */;

function instrumentError() {
  onerror = _mod12007.GLOBAL_OBJ.onerror;
  _mod12007.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12004;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12007.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod12004;
  obj.addHandler("error", arg0);
  const obj2 = _mod12004;
  obj2.maybeInstrument("error", instrumentError);
};
