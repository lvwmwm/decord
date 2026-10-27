// Module ID: 12586
// Function ID: 12587
// Dependencies: [12587, 12590]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12586
import _mod12587 from "module_12587" /* 12587 */;
import _mod12590 from "module_12590" /* 12590 */;

function instrumentError() {
  onerror = _mod12590.GLOBAL_OBJ.onerror;
  _mod12590.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12587;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12590.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod12587;
  obj.addHandler("error", arg0);
  const obj2 = _mod12587;
  obj2.maybeInstrument("error", instrumentError);
};
