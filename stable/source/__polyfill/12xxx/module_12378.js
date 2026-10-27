// Module ID: 12378
// Function ID: 12379
// Dependencies: [12379, 12382]
// Exports: addGlobalErrorInstrumentationHandler

// Module 12378
import _mod12379 from "module_12379" /* 12379 */;
import _mod12382 from "module_12382" /* 12382 */;

function instrumentError() {
  onerror = _mod12382.GLOBAL_OBJ.onerror;
  _mod12382.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12379;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12382.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  const obj = _mod12379;
  obj.addHandler("error", arg0);
  const obj2 = _mod12379;
  obj2.maybeInstrument("error", instrumentError);
};
