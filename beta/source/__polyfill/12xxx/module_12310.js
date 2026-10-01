// Module ID: 12310
// Function ID: 12311
// Dependencies: [12311, 12314]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12310
import _mod12311 from "module_12311" /* 12311 */;
import _mod12314 from "module_12314" /* 12314 */;

function instrumentError() {
  onerror = _mod12314.GLOBAL_OBJ.onerror;
  _mod12314.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12311;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12314.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod12311;
  obj.addHandler("error", arg0);
  const obj2 = _mod12311;
  obj2.maybeInstrument("error", instrumentError);
};
