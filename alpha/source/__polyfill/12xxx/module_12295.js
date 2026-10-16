// Module ID: 12295
// Function ID: 12296
// Dependencies: [12296, 12299]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12295
import _mod12296 from "module_12296" /* 12296 */;
import _mod12299 from "module_12299" /* 12299 */;

function instrumentError() {
  onerror = _mod12299.GLOBAL_OBJ.onerror;
  _mod12299.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12296;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12299.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod12296;
  obj.addHandler("error", arg0);
  const obj2 = _mod12296;
  obj2.maybeInstrument("error", instrumentError);
};
