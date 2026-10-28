// Module ID: 12633
// Function ID: 12634
// Dependencies: [12634, 12637]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12633
import _mod12634 from "module_12634" /* 12634 */;
import _mod12637 from "module_12637" /* 12637 */;

function instrumentError() {
  onerror = _mod12637.GLOBAL_OBJ.onerror;
  _mod12637.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12634;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12637.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod12634;
  obj.addHandler("error", arg0);
  const obj2 = _mod12634;
  obj2.maybeInstrument("error", instrumentError);
};
