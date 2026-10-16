// Module ID: 12301
// Function ID: 12302
// Dependencies: [12302, 12305]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12301
import _mod12302 from "module_12302" /* 12302 */;
import _mod12305 from "module_12305" /* 12305 */;

function instrumentError() {
  onerror = _mod12305.GLOBAL_OBJ.onerror;
  _mod12305.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12302;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12305.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod12302;
  obj.addHandler("error", arg0);
  const obj2 = _mod12302;
  obj2.maybeInstrument("error", instrumentError);
};
