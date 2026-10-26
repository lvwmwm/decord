// Module ID: 12576
// Function ID: 12577
// Dependencies: [12577, 12580]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12576
import _mod12577 from "module_12577" /* 12577 */;
import _mod12580 from "module_12580" /* 12580 */;

function instrumentError() {
  onerror = _mod12580.GLOBAL_OBJ.onerror;
  _mod12580.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12577;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12580.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod12577;
  obj.addHandler("error", arg0);
  const obj2 = _mod12577;
  obj2.maybeInstrument("error", instrumentError);
};
