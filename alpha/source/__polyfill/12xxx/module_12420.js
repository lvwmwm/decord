// Module ID: 12420
// Function ID: 12421
// Dependencies: [12421, 12424]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12420
import _mod12421 from "module_12421" /* 12421 */;
import _mod12424 from "module_12424" /* 12424 */;

function instrumentError() {
  onerror = _mod12424.GLOBAL_OBJ.onerror;
  _mod12424.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12421;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12424.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod12421;
  obj.addHandler("error", arg0);
  const obj2 = _mod12421;
  obj2.maybeInstrument("error", instrumentError);
};
