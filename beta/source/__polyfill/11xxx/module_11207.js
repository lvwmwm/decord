// Module ID: 11207
// Function ID: 11208
// Dependencies: [11208, 11211]
// Exports: addGlobalErrorInstrumentationHandler

// Module 11207
import _mod11208 from "module_11208" /* 11208 */;
import _mod11211 from "module_11211" /* 11211 */;

function instrumentError() {
  onerror = _mod11211.GLOBAL_OBJ.onerror;
  _mod11211.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod11208;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod11211.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod11208;
  obj.addHandler("error", arg0);
  const obj2 = _mod11208;
  obj2.maybeInstrument("error", instrumentError);
};
