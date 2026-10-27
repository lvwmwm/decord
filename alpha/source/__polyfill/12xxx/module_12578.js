// Module ID: 12578
// Function ID: 12579
// Dependencies: [12579, 12582]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12578
import _mod12579 from "module_12579" /* 12579 */;
import _mod12582 from "module_12582" /* 12582 */;

function instrumentError() {
  onerror = _mod12582.GLOBAL_OBJ.onerror;
  _mod12582.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12579;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12582.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod12579;
  obj.addHandler("error", arg0);
  const obj2 = _mod12579;
  obj2.maybeInstrument("error", instrumentError);
};
